import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ApiBearerAuth, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";

import { DataResponse } from "src/common/interfaces";
import { UserResponse, UserValidationResponse, UserOccupationResponse, UserMembershipResponse } from "./interfaces";
import { 
    CreateUserMembershipDto, 
    CreateUserOccupationDto, 
    CreateUserValidationDto, 
    UpdateUserDto, 
    UpdateUserValidationDto, 
    UpdateUserOccupationDto, 
    UpdateUserMembershipDto 
} from "./dto";

import { fileFilter } from "src/helpers";
import { UserService } from "./user.service";
import { ValidRoles } from "src/auth/interfaces";
import { Auth } from "src/auth/decorators";


@ApiTags('Users')
@ApiBearerAuth()
@ApiUnauthorizedResponse({
    description: "Unauthorized Bearer Auth"
})
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @Auth(ValidRoles.admin, ValidRoles.user)
    getAllUsers(): Promise<UserResponse> {
        return this.userService.findAllUsers();
    }

    @Get('user/:userId')
    @Auth(ValidRoles.admin, ValidRoles.user)
    findUser(@Param('userId', ParseUUIDPipe) userId: string): Promise<UserResponse> {
        return this.userService.findUser(userId);
    }

    @Get('user/email/:userEmail')
    @Auth(ValidRoles.admin, ValidRoles.user)
    findUserByEmail(@Param('userEmail') userEmail: string): Promise<UserResponse> {
        return this.userService.findUserByEmail(userEmail);
    }

    @Post('/validation/uploadUserProfileImage')
    @Auth(ValidRoles.admin, ValidRoles.user)
    @UseInterceptors(FileInterceptor('userImageValidation', {
        fileFilter: fileFilter
    }))
    uploadUserImage(
        @UploadedFile() file: Express.Multer.File,
        @Body() idUser: { userId: string }
    ): Promise<DataResponse> {
        return this.userService.uploadUserImage(file, idUser.userId, "profile");
    }

    @Patch('user/:userId')
    @Auth(ValidRoles.admin, ValidRoles.user)
    updateUser(
        @Param('userId', ParseUUIDPipe) userId: string,
        @Body() updateUserDto: UpdateUserDto
    ): Promise<UserResponse> {
        return this.userService.updateUser(userId, updateUserDto);
    }

    @Delete('user/:userId')
    @Auth(ValidRoles.admin)
    deleteUser(@Param('userId', ParseUUIDPipe) userId: string): Promise<UserResponse> {
        return this.userService.deleteUser(userId);
    }

    // * Comienzan endpoints para userOccupation
    @Post('/userOccupation')
    createUserOccupation(@Body() createUserOccupationDto: CreateUserOccupationDto): Promise<UserOccupationResponse> {
        return this.userService.createUserOccupation(createUserOccupationDto);
    }

    @Get('/userOccupation/:userOccupationId')
    findUserOccupation(@Param('userOccupationId', ParseUUIDPipe) userOccupationId: string): Promise<UserOccupationResponse> {
        return this.userService.findUserOccupation(userOccupationId);
    }

    @Get('/:userId/userOccupation')
    findUserOccupationByUserId(@Param('userId', ParseUUIDPipe) userId: string): Promise<UserOccupationResponse> {
        return this.userService.findUserOccupationByUserId(userId);
    }

    @Get('/userOccupation')
    findAllUserOccupation(): Promise<UserOccupationResponse> {
        return this.userService.findAllUserOccupation();
    }

    @Patch('/:userId/userOccupation')
    updateUserOccupation(
        @Param('userId', ParseUUIDPipe) userId: string,
        @Body() updateUserOccupationDto: UpdateUserOccupationDto
    ): Promise<UserOccupationResponse> {
        return this.userService.updateUserOccupation(userId, updateUserOccupationDto);
    }

    @Delete('/:userId/userOccupation')
    deleteUserOccupation(@Param('userId', ParseUUIDPipe) userId: string): Promise<UserOccupationResponse> {
        return this.userService.deleteUserOccupation(userId);
    }

    // * Comienzan endpoints para userMembership
    @Post('/membership')
    createUserMembership(@Body() userMembershipDto: CreateUserMembershipDto): Promise<UserMembershipResponse> {
        return this.userService.createUserMembership(userMembershipDto);
    }

    @Get('/memberships')
    getAllUserMemberships(): Promise<UserMembershipResponse> {
        return this.userService.findAllUserMemberships();
    }

    @Get('/:userId/memberships')
    getMembershipsByUserId(@Param('userId', ParseUUIDPipe) userId: string): Promise<UserMembershipResponse> {
        return this.userService.findMembershipsByUserId(userId);
    }

    @Get('/:userId/membership/validation')
    calculateValidationOfUserMembership(@Param('userId', ParseUUIDPipe) userId: string): Promise<UserMembershipResponse> {
        return this.userService.calculateValidationOfUserMembership(userId);
    }

    @Patch('/memberships/:userMembershipId')
    updateUserMembership(
        @Param('userMembershipId', ParseUUIDPipe) userMembershipId: string,
        @Body() updateUserMembershipDto: UpdateUserMembershipDto
    ): Promise<UserMembershipResponse> {
        return this.userService.updateUserMembership(userMembershipId, updateUserMembershipDto);
    }

    @Delete('/memberships/:userMembershipId')
    deleteUserMembership(@Param('userMembershipId', ParseUUIDPipe) userMembershipId: string): Promise<UserMembershipResponse> {
        return this.userService.deleteUserMembership(userMembershipId);
    }

    // * Comienzan endpoints para userValidation
    @Post('/validation')
    createUserValidation(@Body() createUserValidationDto: CreateUserValidationDto): Promise<UserValidationResponse> {
        return this.userService.createUserValidation(createUserValidationDto);
    }

    @Post('/validation/uploadUserImageValidation')
    @UseInterceptors(FileInterceptor('userImageValidation', {
        fileFilter: fileFilter
    }))
    uploadUserImageValidation(
        @UploadedFile() file: Express.Multer.File,
        @Body() idUser: { userId: string }
    ): Promise<DataResponse> {
        return this.userService.uploadUserImage(file, idUser.userId, "validation");
    }

    @Get('/validation')
    findAllUserValidations(): Promise<UserValidationResponse> {
        return this.userService.findAllUserValidations();
    }

    @Get('/validation/:validationId')
    findUserValidation(@Param('validationId', ParseUUIDPipe) validationId: string): Promise<UserValidationResponse> {
        return this.userService.findUserValidation(validationId);
    }

    @Patch('/validation/:validationId')
    updateUserValidation(
        @Param('validationId', ParseUUIDPipe) validationId: string,
        @Body() updateUserValidationDto: UpdateUserValidationDto
    ): Promise<UserValidationResponse> {
        return this.userService.updateUserValidation(validationId, updateUserValidationDto);
    }

    @Delete('/validation/:validationId')
    deleteUserValidation(@Param('validationId', ParseUUIDPipe) validationId: string): Promise<UserValidationResponse> {
        return this.userService.deleteUserValidation(validationId);
    }
}