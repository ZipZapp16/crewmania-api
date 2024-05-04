import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/auth-user.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // * Login 
  @ApiCreatedResponse({
    description: 'Successfully logged.',
  })
  @Post('signin')
  async auth(@Body() authUserDto: AuthUserDto) {
    return this.authService.authUser(authUserDto);
  }

  // * Registro
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @Post('signup')
  createUser(@Body() createUserDto: CreateUserDto) {
      return this.authService.authCreateUser(createUserDto);
  }
}
