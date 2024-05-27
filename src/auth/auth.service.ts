import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthUserDto } from './dto/auth-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtPayload } from './interfaces/jwt-payload';
import * as bcryptjs from 'bcryptjs';
import { Prisma } from '@prisma/client';
import { UserResponse } from 'src/user/interfaces/user-response.interface';
import { AuthResponse } from './interfaces/auth-response.interface';

@Injectable()
export class AuthService {

  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService
  ) { }

  // * Funcion que inicia sesion
  async authUser(authUserDto: AuthUserDto): Promise<AuthResponse> {
    try {
      const { email, password } = authUserDto;

      const isUserExist = await this.prismaService.user.findFirst({
        where: {
          email
        }
      });

      if (!isUserExist) {
        throw new UnauthorizedException('Usuario no existe');
      }

      if (!bcryptjs.compareSync(password, isUserExist.password)) {
        throw new UnauthorizedException('Not valid credentials - password');
      }

      const { password: _, ...restOfData } = isUserExist;

      const fullname = `${restOfData.name} ${restOfData.lastname} ${restOfData.secondLastname}`;

      return {
        status: "ok",
        message: "success",
        data: {
          ...restOfData,
          token: this.getJWT({ id: restOfData.id, email: restOfData.email, fullname })
        }
      }
    } catch (error) {
      throw new BadRequestException(`Se genero un error al realizar la solicitud: ${error.message}.`);
    }
  }

  // * Funcion que registra un nuevo usuario
  async registerUser(createUserDto: Prisma.UserCreateInput): Promise<UserResponse> {

    try {
      const { email, password, dateAdmission, ...restOfData } = createUserDto;

      await this.prismaService.user.findFirst({
        where: {
          email
        }
      });

      const newData = {
        email,
        password: bcryptjs.hashSync(password, 10),
        dateAdmission: new Date(dateAdmission),
        ...restOfData
      }

      const user = await this.prismaService.user.create({
        data: newData
      });


      return {
        status: "ok",
        message: "success",
        data: user
      }

    } catch (error) {
      console.log(error)
      throw new BadRequestException('Ya existe un usuario registrado con ese correo.');
    }
  }

  getJWT(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }
}
