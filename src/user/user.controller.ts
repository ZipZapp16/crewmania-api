import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { UserOccupancyDto } from './dto/create-user-occupancy.dto';
import { User, UserMembership, UserOccupancy } from '@prisma/client';
import { UserMembershipDto } from './dto/create-user-membership.dto';
import { UserResponse } from './interfaces/userResponse.interface';

@ApiTags('Users')
@ApiBearerAuth()
@ApiUnauthorizedResponse({
    description: "Unauthorized Bearer Auth"
})
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAllUsers(): Promise<UserResponse[]> {
        return this.userService.findAllUsers();
    }

    @Get('user/:id')
    findUser(@Param('id', ParseUUIDPipe) id: string) {
        return this.userService.findUser(id);
    }

    // * Comienzan endpoints para userOccupancy
    @Post('/userOccupancy')
    createUserOccupancy(@Body() userOccupancyDto: UserOccupancyDto): Promise<UserOccupancy> {
        return this.userService.createUserOccupancy(userOccupancyDto);
    }

    @Get('/userOccupancy')
    findAllUserOccupancy(): Promise<UserOccupancy[]> {
        return this.userService.findAllUserOccupancy();
    }

    // * Comienzan endpoints para userMembership
    @Post('/membership')
    createUserMembership(@Body() userMembershipDto: UserMembershipDto): Promise<UserMembership> {
        return this.userService.createUserMembership(userMembershipDto);
    }

    @Get('/memberships')
    getAllUserMemberships(): Promise<UserMembership[]> {
        return this.userService.getAllUserMemberships();
    }

    @Get('/:userId/memberships')
    getMembershipsByUserId(@Param('userId', ParseUUIDPipe) userId: string): Promise<UserMembership[]> {
        return this.userService.getMembershipsByUserId(userId);
    }

    @Get('/:userId/memberships/validity')
    getValidityMembership(@Param('userId', ParseUUIDPipe) userId: string): Promise<UserMembership[]> {
        return this.userService.getValidityMembership(userId);
    }
}