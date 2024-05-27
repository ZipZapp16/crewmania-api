import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from "@nestjs/common";
import { ApiBearerAuth, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { UserResponse, UserValidationResponse } from "./interfaces";
import { CreateUserMembershipDto, CreateUserOccupancyDto, CreateUserValidationDto } from "./dto";
import { UserOccupancyResponse } from "./interfaces/user-occupancy-response.interface";
import { UserMembershipResponse } from "./interfaces/user-membership-response.interface";


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

    @Get('user/:id')
    findUser(@Param('id', ParseUUIDPipe) id: string) {
        return this.userService.findUser(id);
    }

    // * Comienzan endpoints para userOccupancy
    @Post('/userOccupancy')
    createUserOccupancy(@Body() userOccupancyDto: CreateUserOccupancyDto): Promise<UserOccupancyResponse> {
        return this.userService.createUserOccupancy(userOccupancyDto);
    }

    @Get('/userOccupancy')
    findAllUserOccupancy(): Promise<UserOccupancyResponse> {
        return this.userService.findAllUserOccupancy();
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

    // * Comienzan endpoints para userValidation
    @Post('/validation')
    createUserValidation(@Body() createUserValidationDto: CreateUserValidationDto): Promise<UserValidationResponse> {
        return this.userService.createUserValidation(createUserValidationDto);
    }

    @Get('/validation')
    findAllUserValidations(): Promise<UserValidationResponse> {
        return this.userService.findAllUserValidations();
    }

    @Get('/:term/validation')
    findUserValidation(@Param('term', ParseUUIDPipe) term: string): Promise<UserValidationResponse> {
        return this.userService.findUserValidation(term);
    }
}