import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Membership, MembershipOffer, Prisma } from '@prisma/client';
import { CreateMembershipOfferDto } from './dto/create-membership-offer.dto';
import { MembershipOfferResponse, MembershipResponse } from './interfaces';

@Injectable()
export class MembershipService {

  constructor( private readonly prismaService: PrismaService ) { }

  async createMembership(createMembershipDto: CreateMembershipDto): Promise<MembershipResponse> {
    const { membershipOffersId, ...restOfData } = createMembershipDto;

    const data: Prisma.MembershipCreateInput = {
      ...restOfData,
      membershipOffers: membershipOffersId ? { connect: { id: membershipOffersId }} : undefined
    };

    try {
      const membership = await this.prismaService.membership.create({ data });

      return {
        status: 'ok',
        message: 'success',
        data: membership
      };
    } catch (error) {
      console.log(error)
      throw new BadRequestException(`Error al crear membresia. ${error}`);
    }
  }

  async findAllMembership(): Promise<MembershipResponse> {
    try {
      const memberships = await this.prismaService.membership.findMany();

      return {
        status: 'ok',
        message: 'success',
        data: memberships
      };
    } catch (error) {
      throw new NotFoundException('No se encontratron membresias.');
    }
  }

  async findMembership(id: string): Promise<MembershipResponse> {
    try {
      const membership = await this.prismaService.membership.findUnique({ where: { id }});

      return {
        status: 'ok',
        message: 'success',
        data: membership
      };
    } catch (error) {
      throw new NotFoundException('No se encontratron membresias.');
    }
  }

  // * Comienzan logica para offers
  async createMembershipOffer(createMembershipOfferDto: CreateMembershipOfferDto): Promise<MembershipOfferResponse> {
    try {
      const membershipOffer = await this.prismaService.membershipOffer.create({
        data: createMembershipOfferDto
      });

      return {
        status: 'ok',
        message: 'success',
        data: membershipOffer
      };
    } catch (error) {
      throw new BadRequestException(`Error al crear membresia. ${error}`);
    }
  }

  async findAllOffers(): Promise<MembershipOfferResponse> {
    try {
      const offers = await this.prismaService.membershipOffer.findMany();
      
      return {
        status: 'ok',
        message: 'success',
        data: offers
      };
    } catch (error) {
     console.log(error) 

     throw new NotFoundException('No hay ofertas registradas.');
    }
  }
}
