import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserResponse } from './interfaces/user.interface';

@Injectable()
export class UserService {
    constructor(
        private prismaService: PrismaService
    ) { }

    async deleteUser(id: string) {
        const isExistUser = await this.prismaService.user.findUnique({
            where: {
                id
            }
        });

        if (!isExistUser) {
            throw new NotFoundException('NO existe un user con registrado con ese correo.');
        }

        const user = await this.prismaService.user.delete({
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

    async getAllUsers(): Promise<UserResponse[]> {
        const users = await this.prismaService.user.findMany();

        if(!users) {
            throw new NotFoundException('NO existen users registrados.');
        }

        return [
            {
                status: "ok",
                message: "success",
                data: users
            }
        ];
    }

    async getUser(id: string): Promise<UserResponse[]> {
        const user = await this.prismaService.user.findUnique({
            where: {
                id
            }
        });


        if(!user) {
            throw new NotFoundException('NO existe el user solicitado.');
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
