import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Membership, Prisma, UserMembership } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

import * as luxonTime from 'luxon';
import { UserResponse } from './interfaces/user-response.interface';
import { MembershipService } from 'src/membership/membership.service';
import { UserValidationResponse } from './interfaces/user-validation-response.interface';
import { CreateUserValidationDto } from './dto/create-user-validation.dto';
import { UserMembershipResponse } from './interfaces/user-membership-response.interface';
import { CreateUserMembershipDto, CreateUserOccupancyDto } from './dto';
import { MembershipResponse } from 'src/membership/interfaces';
import { UserOccupancyResponse } from './interfaces/user-occupancy-response.interface';

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

    async findAllUsers(): Promise<UserResponse> {
        const users = await this.prismaService.user.findMany();

        if (!users) {
            throw new NotFoundException('NO existen users registrados.');
        }

        return {
            status: "ok",
            message: "success",
            data: users
        }
    }

    async findUser(id: string): Promise<UserResponse> {
        const user = await this.prismaService.user.findUnique({
            where: {
                id
            }
        });


        if (!user) {
            throw new NotFoundException('NO existe el user solicitado.');
        }

        return {
            status: "ok",
            message: "success",
            data: user
        };
    }

    // * Comienzan endpoints para userOccupancy
    async createUserOccupancy(userOccupancyDto: CreateUserOccupancyDto): Promise<UserOccupancyResponse> {
        try {

            const { headquarterId, positionHerarchyId, userId } = userOccupancyDto;

            const data: Prisma.UserOccupancyCreateInput = {
                headquarter: headquarterId ? { connect: { id: headquarterId } } : undefined,
                positionsHerarchy: positionHerarchyId ? { connect: { id: positionHerarchyId } } : undefined,
                user: userId ? { connect: { id: userId } } : undefined
            };

            const newUserOcc = await this.prismaService.userOccupancy.create({ data });
            return {
                status: "ok",
                message: "success",
                data: newUserOcc
            };
        } catch (error) {
            console.log(error)
            throw new BadRequestException(`Error al crear los datos del usuario. ${error}`);
        }
    }

    async findAllUserOccupancy(): Promise<UserOccupancyResponse> {
        try {
            const usersOccupancy = await this.prismaService.userOccupancy.findMany();
            return {
                status: "ok",
                message: "success",
                data: usersOccupancy
            };
        } catch (error) {
            console.log(error)
            throw new NotFoundException(`No se encontraron datos del usuario. ${error}`);
        }
    }

    // * Comienzan endpoints para userMembership
    async createUserMembership(userMembershipDto: CreateUserMembershipDto): Promise<UserMembershipResponse> {
        try {
            const { userId, membershipOfferId } = userMembershipDto;

            // * Obtiene la membresia elegida
            const membership: MembershipResponse = await this.membershipService.findMembership(membershipOfferId);

            // * Obtiene la fecha y hora actual y le suma la cantidad de dias de acuerdo a la membresia seleccionada.
            const dateStart: luxonTime.DateTime<true> = luxonTime.DateTime.now();
            const dateEnd: luxonTime.DateTime<true> = dateStart.plus({ days: membership.data['durationDays'] })

            // * Campos para la creacion de la membresia seleccionada por el usuario.
            const data: Prisma.UserMembershipCreateInput = {
                dateStart: dateStart.toISO(),
                dateEnd: dateEnd.toISO(),
                renovation: false,
                membershipOffer: membershipOfferId ? { connect: { id: membershipOfferId } } : undefined,
                user: userId ? { connect: { id: userId } } : undefined,
            };

            // * Se crea y guardan los datos de la membresia seleccionada por el usuario.
            const newUserMembership = await this.prismaService.userMembership.create({ data });
            return {
                status: 'ok',
                message: 'success',
                data: newUserMembership
            };
        } catch (error) {
            console.log(error)
            throw new NotFoundException(`No se pudo crear los datos de la membresia del usuario. ${error}`);
        }
    }

    // * Devuelve todos los registros existentes en la tabla UserMembership
    async findAllUserMemberships(): Promise<UserMembershipResponse> {
        try {
            const userMemberships = await this.prismaService.userMembership.findMany();
            return {
                status: 'ok',
                message: 'success',
                data: userMemberships
            };
        } catch (error) {
            console.log(error)
            throw new NotFoundException(`No se pudo crear los datos de la membresia del usuario. ${error}`);
        }
    }

    // * Devuelve todos los registros existentes en la tabla UserMembership de acuerdo con el Id del usuario
    async findMembershipsByUserId(userId: string): Promise<UserMembershipResponse> {
        try {
            const membershipByUserId = await this.prismaService.userMembership.findMany({ where: { userId } });
            return {
                status: 'ok',
                message: 'success',
                data: membershipByUserId
            };
        } catch (error) {
            console.log(error)
            throw new NotFoundException(`No se pudo crear los datos de la membresia del usuario. ${error}`);
        }
    }

    // * Verifica la validacion de la membresia del usuario
    async findValidityMembership(userId: string): Promise<UserMembershipResponse> {
        try {
            const userMemberships: UserMembershipResponse = await this.findMembershipsByUserId(userId);

            // const membership = await this.membershipService.findMembership(membershipId);

            const today: luxonTime.DateTime<true> = luxonTime.DateTime.now();

            let totalsDays: number = 0;

            let response = [];

            // userMemberships.data.forEach(({ dateEnd, membershipId, userId }) => {
            //     const membershipDateEnd = luxonTime.DateTime.fromISO(dateEnd.toISOString());
            //     const membershipDays = today.diff(membershipDateEnd, 'days');

            //     let remainingDays = parseInt(membershipDays.days.toString(), 10) * -1;

            //     response.push({ remainingDays: remainingDays > 0 ? remainingDays : 0, membershipId, userId });
            // });

            // console.log(response)
            // return userMemberships;

            return {
                status: 'ok',
                message: 'success',
                data: []
            };
        } catch (error) {
            console.log(error)
            throw new NotFoundException(`No se pudo crear los datos de la membresia del usuario. ${error}`);
        }
    }

    async createUserValidation(createUserValidationDto: CreateUserValidationDto): Promise<UserValidationResponse> {
        try {
            const { statusValidationId, userId, validationFormId, url } = createUserValidationDto;

            const data: Prisma.UserValidationCreateInput = {
                statusValidation: statusValidationId ? { connect: { id: statusValidationId } } : undefined,
                validationForm: validationFormId ? { connect: { id: validationFormId } } : undefined,
                user: userId ? { connect: { id: userId } } : undefined,
                url
            }

            const userValidation = await this.prismaService.userValidation.create({ data });

            return {
                status: "ok",
                message: "success",
                data: userValidation
            };
        } catch (error) {
            console.log(error)
            throw new BadRequestException(`No se pudo crear los datos de la membresia del usuario. ${error}`);
        }
    }

    async findAllUserValidations(): Promise<UserValidationResponse> {
        try {
            const userValidations = await this.prismaService.userValidation.findMany();

            return {
                status: "ok",
                message: "success",
                data: userValidations
            };
        } catch (error) {
            console.log(error)
            throw new NotFoundException(`No se pudo crear los datos de la membresia del usuario. ${error}`);
        }
    }

    async findUserValidation(term: string): Promise<UserValidationResponse> {
        const patronUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

        let validation = null;

        if (patronUUID.test(term)) {
            validation = await this.prismaService.userValidation.findUnique({
                where: {
                    id: term
                }
            })

            if (!validation) {
                validation = await this.prismaService.userValidation.findUnique({
                    where: {
                        userId: term
                    }
                });
            }

            return {
                status: "ok",
                message: "success",
                data: validation
            }
        } else {
            throw new BadRequestException('El termino de busqueda NO es un UUID valido.');
        }
    }
}
