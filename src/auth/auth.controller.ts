import { Controller, Post, Body } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

import { AuthUserDto } from './dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

import { UserResponse } from 'src/user/interfaces/user-response.interface';
import { AuthResponse } from './interfaces';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // * Login 
  @ApiCreatedResponse({
    description: 'Successfully logged.',
  })
  @Post('signin')
  async auth(@Body() authUserDto: AuthUserDto): Promise<AuthResponse> {
    return this.authService.authUser(authUserDto);
  }

  // * Registro
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @Post('signup')
  registerUser(@Body() createUserDto: CreateUserDto): Promise<UserResponse> {
      return this.authService.registerUser(createUserDto);
  }
}
