import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

import { UserResponse } from './interfaces/userResponse.interface';
import { UserOccupancyDto } from './dto/create-user-occupancy.dto';
import { UserMembershipDto } from './dto/create-user-membership.dto';

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

        if (!users) {
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


        if (!user) {
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

    // * Comienzan endpoints para userOccupancy
    async createUserOccupancy(userOccupancyDto: UserOccupancyDto) {
        try {

            const { headquarterId, positionHerarchyId, userId } = userOccupancyDto;

            const data: Prisma.UserOccupancyCreateInput = {
                headquarter: headquarterId ? { connect: { id: headquarterId } } : undefined,
                positionsHerarchy: positionHerarchyId ? { connect: { id: positionHerarchyId } } : undefined,
                user: userId ? { connect: { id: userId } } : undefined
            };

            const newUserOcc = await this.prismaService.userOccupancy.create({ data });

            return newUserOcc;
        } catch (error) {
            console.log(error)
            throw new BadRequestException(`Error al crear los datos del usuario. ${error}`);
        }
    }

    async findAllUserOccupancy() {
        try {
            const usersOccupancy = await this.prismaService.userOccupancy.findMany();

            return usersOccupancy;
        } catch (error) {
            console.log(error)
            throw new NotFoundException(`No se encontraron datos del usuario. ${error}`);
        }
    }

    // * Comienzan endpoints para userMembership
    async createUserMembership(userMembershipDto: UserMembershipDto) {
        try {
            const { userId, membershipId } = userMembershipDto;

            const dateStart: Date = new Date();

            // TODO: Buscar id de membresia y calcular vigencia.
            const dateEnd: Date = new Date();

            const data: Prisma.UserMembershipCreateInput = {
                dateStart,
                dateEnd,
                renovation: false,
                membership: membershipId ? { connect: { id: membershipId } } : undefined,
                user: userId ? { connect: { id: userId } } : undefined
            };

            const newUserMembership = await this.prismaService.userMembership.create({ data });

            return newUserMembership;

        } catch (error) {
            console.log(error)
            throw new NotFoundException(`No se pudo crear los datos de la membresia del usuario. ${error}`);
        }
    }
}
