import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

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

    @Delete('user/:id')
    deleteUser(@Param('id', ParseUUIDPipe) id: string) {
        return this.userService.deleteUser(id);
    }
}