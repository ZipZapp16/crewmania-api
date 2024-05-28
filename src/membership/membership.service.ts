import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Membership, MembershipOffer, Prisma } from '@prisma/client';
import { CreateMembershipOfferDto } from './dto/create-membership-offer.dto';
import { MembershipOfferResponse, MembershipResponse } from './interfaces';
import { CreateOfferDto } from './dto';
import { OfferResponse } from './interfaces/offers-response.interface';
import { FindMembershipOfferResponse } from './interfaces/membership-offer-response.interface';

@Injectable()
export class MembershipService {

  constructor(private readonly prismaService: PrismaService) { }

  async createMembership(createMembershipDto: CreateMembershipDto): Promise<MembershipResponse> {

    try {
      const membership = await this.prismaService.membership.create({ data: createMembershipDto });

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
      const membership = await this.prismaService.membership.findUnique({ where: { id } });

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
  async createOffer(createOfferDto: CreateOfferDto): Promise<OfferResponse> {
    try {
      const offer = await this.prismaService.offer.create({
        data: createOfferDto
      });

      return {
        status: 'ok',
        message: 'success',
        data: offer
      };
    } catch (error) {
      throw new BadRequestException(`Error al crear membresia. ${error}`);
    }
  }

  async findAllOffers(): Promise<OfferResponse> {
    try {
      const offers = await this.prismaService.offer.findMany();

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

  async findOffer(id: string): Promise<OfferResponse> {
    try {
      const offer = await this.prismaService.offer.findMany({ where: { id } });

      return {
        status: 'ok',
        message: 'success',
        data: offer
      }
    } catch (error) {
      throw new NotFoundException('No se encontro la oferta solicitada.');
    }
  }

  async createMembershipOffer(createMembershipOfferDto: CreateMembershipOfferDto): Promise<MembershipOfferResponse> {
    try {
      const { membershipId, offerId } = createMembershipOfferDto;

      const data: Prisma.MembershipOfferCreateInput = {
        offer: offerId ? { connect: { id: offerId } } : undefined,
        membership: membershipId ? { connect: { id: membershipId } } : undefined,
      }

      const membershipOffer = await this.prismaService.membershipOffer.create({ data })

      return {
        status: 'ok',
        message: "success",
        data: membershipOffer
      }
    } catch (error) {
      console.log(error)
      throw new BadRequestException("Can't create the membership offer.");
    }
  }

  async findAllMembershipOffers(): Promise<MembershipOfferResponse> {
    try {
      const membershipOffer = await this.prismaService.membershipOffer.findMany();

      return {
        status: 'ok',
        message: "success",
        data: membershipOffer
      }
    } catch (error) {
      throw new NotFoundException("Can't reach the membership offer field requested.", error);
    }
  }

  async findMembershipOffer(membershipId: string): Promise<FindMembershipOfferResponse> {
    try {
      const membershipOffer = await this.prismaService.membershipOffer.findMany({ where: { membershipId } });

      let mOffers = [];

      membershipOffer.map(async mo => {
        mOffers.push({ 
          id: mo.id,
          membership: await this.findMembership(membershipId),
          offer: await this.findOffer(mo.offerId)
        })
      })

      return {
        status: 'ok',
        message: "success",
        data: mOffers
      }
    } catch (error) {
      throw new NotFoundException("Can't reach the membership offer field requested.", error);
    }
  }
}
