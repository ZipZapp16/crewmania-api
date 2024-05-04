import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Users } from './interfaces/user.interface';

@Injectable()
export class UserService {
    constructor(
        private prismaService: PrismaService
    ) { }

    async deleteUser(id: number) {
        const isExistUser = await this.prismaService.usuario.findUnique({
            where: {
                id
            }
        });

        if (!isExistUser) {
            throw new NotFoundException('NO existe un usuario con registrado con ese correo.');
        }

        const user = await this.prismaService.usuario.delete({
            where: {
                id: id,
            },
        });

        return [
            {
                status: "ok",
                message: "success",
                data: user
            }
        ];
    }

    async getAllUsers(): Promise<Users[]> {
        const users = await this.prismaService.usuario.findMany();

        if(!users) {
            throw new NotFoundException('NO existen usuarios registrados.');
        }

        return [
            {
                status: "ok",
                message: "success",
                data: users
            }
        ];
    }

    async getUser(id: number): Promise<User[]> {
        const user = await this.prismaService.usuario.findUnique({
            where: {
                id
            }
        });


        if(!user) {
            throw new NotFoundException('NO existe el usuario solicitado.');
        }

        return [
            {
                status: "ok",
                message: "success",
                data: user
            }
        ];
    }
}
