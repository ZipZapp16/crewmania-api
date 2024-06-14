import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Membership, MembershipOffer, Prisma } from '@prisma/client';
import { CreateMembershipOfferDto } from './dto/create-membership-offer.dto';
import { MembershipOfferResponse, MembershipResponse } from './interfaces';
import { CreateOfferDto } from './dto';
import { OfferResponse } from './interfaces/offers-response.interface';
import { FindMembershipOfferResponse } from './interfaces/membership-offer-response.interface';
import { UpdateMembershipDto } from './dto/update-membership.dto';

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
      throw new BadRequestException(`Error to create membership. ${error}`);
    }
  }

  async findMembership(membershipId: string): Promise<MembershipResponse> {
    try {
      const membership = await this.prismaService.membership.findUnique({ where: { id: membershipId } });

      return {
        status: 'ok',
        message: 'success',
        data: membership
      };
    } catch (error) {
      throw new NotFoundException(`Membership with id ${membershipId} doesn't exists.`);
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
      throw new NotFoundException('There are not memberships registered.');
    }
  }

  async updateMembership(membershipId: string, updateMembershipDto: UpdateMembershipDto): Promise<MembershipResponse> {
    try {
      const { data: membershipToUpdate } = await this.findMembership(membershipId);

      const membershipUpdated = await this.prismaService.membership.update({ where: { id: membershipToUpdate['id'] }, data: updateMembershipDto });

      return {
        status: "ok",
        message: "success",
        data: membershipUpdated
      }
    } catch (error) {
      throw new BadRequestException(`Error to update membership with id ${membershipId}. ${error}`);
    }
  }

  async deleteMembership(membershipId: string): Promise<MembershipResponse> {
    try {
      const { data: membershipToDelete } = await this.findMembership(membershipId);

      const membershipDeleted = await this.prismaService.membership.delete({ where: { id: membershipToDelete['id'] } })

      return {
        status: "ok",
        message: "success",
        data: membershipDeleted
      }
    } catch (error) {
      throw new BadRequestException(`Error to delete the membership with id ${membershipId}. ${error}`);
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
