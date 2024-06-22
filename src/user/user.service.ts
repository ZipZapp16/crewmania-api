import * as luxonTime from 'luxon';
import { 
    BadRequestException, 
    Injectable, 
    NotFoundException 
} from '@nestjs/common';

import { Prisma, UserMembership } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

import { 
    UserResponse, 
    UserValidationResponse, 
    UserMembershipResponse, 
    UserOccupancyResponse 
} from './interfaces';

import { MembershipResponse } from 'src/subscription/interfaces';
import { DataResponse } from 'src/common/interfaces/data-response.interface';

import { SubscriptionService } from 'src/subscription/subscription.service';
import { CommonService } from 'src/common/common.service';

import { 
    CreateUserMembershipDto, 
    CreateUserOccupancyDto, 
    UpdateUserDto, 
    UpdateUserOccupancyDto, 
    CreateUserValidationDto, 
    UpdateUserValidationDto, 
    UpdateUserMembershipDto 
} from './dto';

@Injectable()
export class UserService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly subscriptionService: SubscriptionService,
        private readonly commonService: CommonService
    ) { }

    async findUser(userId: string): Promise<UserResponse> {
        try {
            const user = await this.prismaService.user.findUnique({ where: { id: userId } });

            return {
                status: "ok",
                message: "success",
                data: user
            };
        } catch (error) {
            throw new NotFoundException(`User with id ${userId} doesn't exist.`);
        }
    }

    async findAllUsers(): Promise<UserResponse> {
        try {
            const users = await this.prismaService.user.findMany();

            return {
                status: "ok",
                message: "success",
                data: users
            }
        } catch (error) {
            throw new NotFoundException("There are not registered users.");
        }
    }

    async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<UserResponse> {
        try {
            const { data: userToUpdate } = await this.findUser(userId);

            const userUpdated = await this.prismaService.user.update({ where: { id: userToUpdate['id'] }, data: updateUserDto });

            return {
                status: "ok",
                message: "success",
                data: userUpdated
            }
        } catch (error) {
            throw new BadRequestException(`Error to update user with id ${userId}. ${error}`);
        }
    }

    async deleteUser(userId: string): Promise<UserResponse> {
        try {
            const { data: userToDelete } = await this.findUser(userId);

            const user = await this.prismaService.user.delete({ where: { id: userToDelete['id'] } });

            return {
                status: "ok",
                message: "success",
                data: user
            };
        } catch (error) {
            throw new BadRequestException(`Error to delete user with id ${userId}. ${error}`);
        }
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

    async findUserOccupancy(userOccupancyId: string): Promise<UserOccupancyResponse> {
        try {
            const userOccupancy = await this.prismaService.userOccupancy.findUnique({ where: { id: userOccupancyId } });

            return {
                status: "ok",
                message: "success",
                data: userOccupancy
            }
        } catch (error) {
            throw new NotFoundException(`UserOccupancy with id ${userOccupancyId} doesn't exists.`);
        }
    }

    async findUserOccupancyByUserId(userId: string): Promise<UserOccupancyResponse> {
        try {
            const { data: user } = await this.findUser(userId);
            const userOccupancy = await this.prismaService.userOccupancy.findUnique({ where: { userId: user['id'] } });

            return {
                status: "ok",
                message: "success",
                data: userOccupancy
            }
        } catch (error) {
            throw new NotFoundException(`UserOccupancy with id ${userId} doesn't exists.`);
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

    async updateUserOccupancy(idUser: string, updateUserOccupancyDto: UpdateUserOccupancyDto): Promise<UserOccupancyResponse> {
        try {
            const { data: userOccupancyToUpdate } = await this.findUserOccupancyByUserId(idUser);
            const { headquarterId, positionHerarchyId, userId } = updateUserOccupancyDto;

            const data: Prisma.UserOccupancyUpdateInput = {
                headquarter: headquarterId ? { connect: { id: headquarterId } } : undefined,
                positionsHerarchy: positionHerarchyId ? { connect: { id: positionHerarchyId } } : undefined,
                user: userId ? { connect: { id: userId } } : undefined
            };

            const userOccupancyUpdated = await this.prismaService.userOccupancy.update({ where: { id: userOccupancyToUpdate['id'] }, data });

            return {
                status: "ok",
                message: 'success',
                data: userOccupancyUpdated
            }
        } catch (error) {
            throw new BadRequestException(`Error to update the information of userOccupancy with id ${idUser} ${error}`);
        }
    }

    async deleteUserOccupancy(userId: string): Promise<UserOccupancyResponse> {
        try {
            const { data: userOccupancyToDelete } = await this.findUserOccupancyByUserId(userId);

            const userOccupancyDeleted = await this.prismaService.userOccupancy.delete({ where: { id: userOccupancyToDelete['id'] } });

            return {
                status: 'ok',
                message: 'success',
                data: userOccupancyDeleted
            }
        } catch (error) {
            throw new BadRequestException(`Error to delete the information of userOccupancy with id ${userId} ${error}`);
        }
    }

    // * Comienzan endpoints para userMembership
    async createUserMembership(userMembershipDto: CreateUserMembershipDto): Promise<UserMembershipResponse> {
        try {
            const { userId, membershipOfferId } = userMembershipDto;

            // * Validar que el usuario no se suscriba a la misma opcion si es que ya la pago ante
            const { data: membershipOffer }: UserMembershipResponse = await this.findUserSubscribedToMembership(userId, membershipOfferId);

            let userSubscribed = membershipOffer as unknown as UserMembership[];

            if (userSubscribed.length > 0) {
                throw new BadRequestException(`You already have subscribed to this membership.`);
            }

            //  TODO: LLAMAR API DE PAGOS

            // * Si no se ha suscrito, obtener el id de la membresia
            const { data: membershipData } = await this.subscriptionService.findMembershipOffer(membershipOfferId);
            const membership: MembershipResponse = await this.subscriptionService.findMembership(membershipData['membershipId']);

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
            throw new BadRequestException(`No se pudo crear los datos de la membresia del usuario. ${error}`);
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

    async findUserMembership(userMembershipId: string): Promise<UserMembershipResponse> {
        try {
            const userMembership = await this.prismaService.userMembership.findUnique({ where: { id: userMembershipId } });

            return {
                status: 'ok',
                message: 'success',
                data: userMembership
            };
        } catch (error) {
            throw new NotFoundException(`No se pudo encontrar user membership with id ${userMembershipId}. ${error}`);
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

    async updateUserMembership(userMembershipId: string, updateUserMembershipDto: UpdateUserMembershipDto): Promise<UserMembershipResponse> {
        try {
            const { data: userMembershipToUpdate } = await this.findUserMembership(userMembershipId);

            const userMembershipUpdated = await this.prismaService.userMembership.update({ where: { id: userMembershipToUpdate['id'] }, data: updateUserMembershipDto });

            return {
                status: 'ok',
                message: 'success',
                data: userMembershipUpdated
            };
        } catch (error) {
            throw new BadRequestException(`Error al actualizar user membership with id ${userMembershipId}. ${error}`);
        }
    }

    async findUserSubscribedToMembership(userId: string, membershipOfferId: string): Promise<UserMembershipResponse> {
        try {
            const userSubscribed = await this.prismaService.userMembership.findMany({ where: { userId, membershipOfferId } });

            return {
                status: 'ok',
                message: 'success',
                data: userSubscribed.length > 0 ? userSubscribed : []
            };
        } catch (error) {
            throw new NotFoundException(`No se encontro el usuario solicitado con el id ${userId}. ${error}`);
        }
    }

    async deleteUserMembership(userMembershipId: string): Promise<UserMembershipResponse> {
        try {
            const { data: userMembershipToDelete } = await this.findUserMembership(userMembershipId);

            const userMembershipDeleted = await this.prismaService.userMembership.delete({ where: { id: userMembershipToDelete['id'] } });

            return {
                status: 'ok',
                message: 'success',
                data: userMembershipDeleted
            };
        } catch (error) {
            throw new BadRequestException(`No se pudo borrar el usuario solicitado con el id ${userMembershipId}. ${error}`);
        }
    }

    async createUserValidation(createUserValidationDto: CreateUserValidationDto): Promise<UserValidationResponse> {
        try {

            const statusValidation = await this.prismaService.statusValidation.findFirst({ where: { type: "En curso" }});

            const { statusValidationId = statusValidation.id, userId, validationFormId, url = "" } = createUserValidationDto;

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
            throw new BadRequestException(`No se pudo crear los datos de la membresia del usuario. ${error}`);
        }
    }

    async uploadUserImageValidation(file: Express.Multer.File, userId: string): Promise<DataResponse> {
        try {
            
            const patronUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

            if (!patronUUID.test(userId)) {
                throw new BadRequestException(`The value ${userId} is not a UUID`);
            }

            const typeImage: string = 'image_validation';

            const { data: userValidation } = await this.findUserValidationByUserId(userId);

            const saveImageUploadedId = await this.commonService.uploadFileS3(file, userId, typeImage);

            if(saveImageUploadedId) {
                const urlUserImageValidation = await this.prismaService.userValidation.update({
                    where: { id: userValidation['id'] }, data: {
                        url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/${userId}/${typeImage}_${userId}.jpg`
                    }
                });

                if(!urlUserImageValidation) {
                    throw new BadRequestException(`Can't save de url to the image validation of user with id ${userId}`);
                }

                return {
                    status: "ok",
                    message: "success"
                }
            }
        } catch (error) {
            throw new BadRequestException(`Error to upload image. ${error}`);
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

    async findUserValidation(userValidationId: string): Promise<UserValidationResponse> {
        try {
            const userValidation = await this.prismaService.userValidation.findUnique({ where: { id: userValidationId } });

            return {
                status: "ok",
                message: "success",
                data: userValidation
            };
        } catch (error) {
            throw new NotFoundException(`User validation with id ${userValidationId} not found.`);
        }
    }

    async findUserValidationByUserId(userId: string): Promise<UserValidationResponse> {
        try {
            const userValidation = await this.prismaService.userValidation.findUnique({ where: { userId } });

            console.log(userValidation)

            return {
                status: "ok",
                message: "success",
                data: userValidation
            };
        } catch (error) {
            throw new NotFoundException(`User validation with id ${userId} not found.`);
        }
    }

    async updateUserValidation(userValidationId: string, updateUserValidationDto: UpdateUserValidationDto): Promise<UserValidationResponse> {
        try {
            const { data: userValidationToUpdate } = await this.findUserValidation(userValidationId);

            const userValidationUpdated = await this.prismaService.userValidation.update({ where: { id: userValidationToUpdate['id'] }, data: updateUserValidationDto });

            return {
                status: "ok",
                message: "success",
                data: userValidationUpdated
            };
        } catch (error) {
            throw new BadRequestException(`Error al actualizar la validacion del usuario. ${error}`);
        }
    }

    async deleteUserValidation(userValidationId: string): Promise<UserValidationResponse> {
        try {
            const { data: userValidationToDelete } = await this.findUserValidation(userValidationId);

            const userValidationDeleted = await this.prismaService.userValidation.delete({ where: { id: userValidationToDelete['id'] } });

            return {
                status: "ok",
                message: "success",
                data: userValidationDeleted
            };
        } catch (error) {
            throw new BadRequestException(`Error al eliminar la validacion del usuario. ${error}`);
        }
    }
}
