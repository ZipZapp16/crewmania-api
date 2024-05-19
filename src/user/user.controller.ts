import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { UserOccupancyDto } from './dto/create-user-occupancy.dto';
import { UserOccupancy } from '@prisma/client';
import { UserMembershipDto } from './dto/create-user-membership.dto';

@ApiTags('Users')
@ApiBearerAuth()
@ApiUnauthorizedResponse({
    description: "Unauthorized Bearer Auth"
})
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get('user/:id')
    getUser(@Param('id', ParseUUIDPipe) id: string) {
        return this.userService.getUser(id);
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
    @Post('/userMembership')
    createUserMembership(@Body() userMembershipDto: UserMembershipDto) {
        return this.userService.createUserMembership(userMembershipDto);
    }
}