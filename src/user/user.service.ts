import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Membership, Prisma, UserMembership } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

import * as luxonTime from 'luxon';
import { UserResponse } from './interfaces/userResponse.interface';
import { UserOccupancyDto } from './dto/create-user-occupancy.dto';
import { UserMembershipDto } from './dto/create-user-membership.dto';
import { MembershipService } from 'src/membership/membership.service';

@Injectable()
export class UserService {
    constructor(
        private prismaService: PrismaService,
        private readonly membershipService: MembershipService
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

    async findAllUsers(): Promise<UserResponse[]> {
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

    async findUser(id: string): Promise<UserResponse[]> {
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
    async createUserMembership(userMembershipDto: UserMembershipDto): Promise<UserMembership> {
        try {
            const { userId, membershipId } = userMembershipDto;

            // * Obtiene la membresia elegida
            const membership: Membership = await this.membershipService.findMembership(membershipId);

            // * Obtiene la fecha y hora actual y le suma la cantidad de dias de acuerdo a la membresia seleccionada.
            const dateStart: luxonTime.DateTime<true> = luxonTime.DateTime.now();
            const dateEnd: luxonTime.DateTime<true> = dateStart.plus({ days: membership.durationDays })

            // * Campos para la creacion de la membresia seleccionada por el usuario.
            const data: Prisma.UserMembershipCreateInput = {
                dateStart: dateStart.toISO(),
                dateEnd: dateEnd.toISO(),
                renovation: false,
                membership: membershipId ? { connect: { id: membershipId } } : undefined,
                user: userId ? { connect: { id: userId } } : undefined
            };

            // * Se crea y guardan los datos de la membresia seleccionada por el usuario.
            const newUserMembership = await this.prismaService.userMembership.create({ data });
            return newUserMembership;
        } catch (error) {
            console.log(error)
            throw new NotFoundException(`No se pudo crear los datos de la membresia del usuario. ${error}`);
        }
    }
}
