import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ApiBearerAuth, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";

import { DataResponse } from "src/common/interfaces/data-response.interface";
import { UserResponse, UserValidationResponse, UserOccupancyResponse, UserMembershipResponse } from "./interfaces";
import { 
    CreateUserMembershipDto, 
    CreateUserOccupancyDto, 
    CreateUserValidationDto, 
    UpdateUserDto, 
    UpdateUserValidationDto, 
    UpdateUserOccupancyDto, 
    UpdateUserMembershipDto 
} from "./dto";

import { fileFilter } from "src/helpers";
import { UserService } from "./user.service";


@ApiTags('Users')
@ApiBearerAuth()
@ApiUnauthorizedResponse({
    description: "Unauthorized Bearer Auth"
})
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAllUsers(): Promise<UserResponse> {
        return this.userService.findAllUsers();
    }

    @Get('user/:userId')
    findUser(@Param('userId', ParseUUIDPipe) userId: string): Promise<UserResponse> {
        return this.userService.findUser(userId);
    }

    @Patch('user/:userId')
    updateUser(
        @Param('userId', ParseUUIDPipe) userId: string,
        @Body() updateUserDto: UpdateUserDto
    ): Promise<UserResponse> {
        return this.userService.updateUser(userId, updateUserDto);
    }

    @Delete('user/:userId')
    deleteUser(@Param('userId', ParseUUIDPipe) userId: string): Promise<UserResponse> {
        return this.userService.deleteUser(userId);
    }

    // * Comienzan endpoints para userOccupancy
    @Post('/userOccupancy')
    createUserOccupancy(@Body() userOccupancyDto: CreateUserOccupancyDto): Promise<UserOccupancyResponse> {
        return this.userService.createUserOccupancy(userOccupancyDto);
    }

    @Get('/userOccupancy/:userOccupancyId')
    findUserOccupancy(@Param('userOccupancyId', ParseUUIDPipe) userOccupancyId: string): Promise<UserOccupancyResponse> {
        return this.userService.findUserOccupancy(userOccupancyId);
    }

    @Get('/:userId/userOccupancy')
    findUserOccupancyByUserId(@Param('userId', ParseUUIDPipe) userId: string): Promise<UserOccupancyResponse> {
        return this.userService.findUserOccupancyByUserId(userId);
    }

    @Get('/userOccupancy')
    findAllUserOccupancy(): Promise<UserOccupancyResponse> {
        return this.userService.findAllUserOccupancy();
    }

    @Patch('/:userId/userOccupancy')
    updateUserOccupancy(
        @Param('userId', ParseUUIDPipe) userId: string,
        @Body() updateUserOccupancyDto: UpdateUserOccupancyDto
    ): Promise<UserOccupancyResponse> {
        return this.userService.updateUserOccupancy(userId, updateUserOccupancyDto);
    }

    @Delete('/:userId/userOccupancy')
    deleteUserOccupancy(@Param('userId', ParseUUIDPipe) userId: string): Promise<UserOccupancyResponse> {
        return this.userService.deleteUserOccupancy(userId);
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

    @Get('/:userId/memberships/validity')
    getValidityMembership(@Param('userId', ParseUUIDPipe) userId: string): Promise<UserMembershipResponse> {
        return this.userService.findValidityMembership(userId);
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
        return this.userService.uploadUserImageValidation(file, idUser.userId);
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