import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthUserDto } from './dto/auth-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtPayload } from './interfaces/jwt-payload';
import * as bcryptjs from 'bcryptjs';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService
  ) { }

  async authUser(authUserDto: AuthUserDto) {
    try {
      const { email, password } = authUserDto;

      const isUserExist = await this.prismaService.usuario.findFirst({
        where: {
          email
        }
      });

      if(!isUserExist) {
        throw new UnauthorizedException('Usuario no existe');
      }

      if ( !bcryptjs.compareSync( password, isUserExist.password ) ) {
        throw new UnauthorizedException('Not valid credentials - password');
      }

      const { password: _, ...restOfData } = isUserExist;

      const fullname = `${restOfData.nombre} ${restOfData.apellidoPaterno} ${restOfData.apellidoMaterno}`;

      return [
        {
          ...restOfData,
          fullname,
          token: this.getJWT({ id: restOfData.id, email: restOfData.email, fullname })
        }
      ];
    } catch (error) {
      throw new BadRequestException(`Se genero un error al realizar la solicitud: ${error.message}.`);
    }
  }

  async authCreateUser(createUserDto: CreateUserDto) {

    const { email, password, fechaDeIngreso, ...restOfData } = createUserDto;

    const isExistUser = await this.prismaService.usuario.findFirst({
        where: {
            email
        }
    });

    if (isExistUser) {
        throw new BadRequestException('Ya existe un usuario registrado con ese correo.');
    }

    const newData = {
        email,
        password: bcryptjs.hashSync(password, 10),
        fechaDeIngreso: new Date(fechaDeIngreso),
        ...restOfData
    }

    const user = await this.prismaService.usuario.create({
        data: newData
    });

    return [
        {
            status: "ok",
            message: "success",
            data: user
        }
    ];
}

  getJWT(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }
}
