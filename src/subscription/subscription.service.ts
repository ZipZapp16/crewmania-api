import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { MembershipOfferResponse, MembershipResponse, FindMembershipOfferResponse, OfferResponse } from './interfaces';
import { CreateOfferDto, CreateMembershipDto, UpdateMembershipDto, CreateMembershipOfferDto, UpdateOfferDto, UpdateMembershipOfferDto } from './dto';

@Injectable()
export class SubscriptionService {

  constructor(private readonly prismaService: PrismaService) { }

  async createMembership(createMembershipDto: CreateMembershipDto): Promise<MembershipResponse> {
    try {
      const membership = await this.prismaService.membership.create({ data: { ...createMembershipDto, cost: new Prisma.Decimal(createMembershipDto.cost) } });

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
      const offer = await this.prismaService.offer.create({ data: createOfferDto });

      return {
        status: 'ok',
        message: 'success',
        data: offer
      };
    } catch (error) {
      throw new BadRequestException(`Error to create membership. ${error}`);
    }
  }

  async findOffer(offerId: string): Promise<OfferResponse> {
    try {
      const offer = await this.prismaService.offer.findUnique({ where: { id: offerId } });

      return {
        status: 'ok',
        message: 'success',
        data: offer
      }
    } catch (error) {
      throw new NotFoundException(`Offer with id ${offerId} doesn't exist.`);
    }
  }

  async findAllOffers(): Promise<OfferResponse> {
    try {
      const offers = await this.prismaService.offer.findMany();

      console.log(offers)

      return {
        status: 'ok',
        message: 'success',
        data: offers
      };
    } catch (error) {
      throw new NotFoundException('There is not offers registered.');
    }
  }

  async updateOffer(offerId: string, updateOfferDto: UpdateOfferDto): Promise<OfferResponse> {
    try {
      const { data: offerToUpdate } = await this.findOffer(offerId);

      const offerUpdated = await this.prismaService.offer.update({ where: { id: offerToUpdate['id'] }, data: updateOfferDto });

      return {
        status: 'ok',
        message: 'success',
        data: offerUpdated
      };
    } catch (error) {
      throw new BadRequestException(`Error to update offer with id ${offerId}. ${error}`);
    }
  }

  async deleteOffer(offerId: string): Promise<OfferResponse> {
    try {
      const { data: offerToDelete } = await this.findOffer(offerId);

      const offerDeleted = await this.prismaService.offer.delete({ where: { id: offerToDelete['id'] } });

      return {
        status: 'ok',
        message: 'success',
        data: offerDeleted
      };
    } catch (error) {
      throw new BadRequestException(`Error to delete offer with id ${offerId}. ${error}`);
    }
  }

  // * Comienza logica para union entre memberships y offers
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
      throw new BadRequestException(`Couldn't create the membership offer. ${error}`);
    }
  }

  async findMembershipOffer(membershipOfferId: string): Promise<MembershipOfferResponse> {
    try {
      const membershipOffer = await this.prismaService.membershipOffer.findUnique({ where: { id: membershipOfferId } });

      return {
        status: 'ok',
        message: "success",
        data: membershipOffer
      }
    } catch (error) {
      throw new NotFoundException(`Memberships offers not found with id ${membershipOfferId}. ${error}`);
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

  // async findMembershipOffers(membershipId: string): Promise<FindMembershipOfferResponse> {
  //   try {
  //     const membershipOffer = await this.prismaService.membershipOffer.findMany({ where: { membershipId } });

  //     let mOffers = [];

  //     membershipOffer.map(async mo => {
  //       mOffers.push({
  //         id: mo.id,
  //         membership: await this.findMembership(membershipId),
  //         offer: await this.findOffer(mo.offerId)
  //       })
  //     })

  //     return {
  //       status: 'ok',
  //       message: "success",
  //       data: mOffers
  //     }
  //   } catch (error) {
  //     throw new NotFoundException("Can't reach the membership offer field requested.", error);
  //   }
  // }

  async updateMembershipOffer(membershipOfferId: string, updateMembershipOfferDto: UpdateMembershipOfferDto): Promise<MembershipOfferResponse> {
    try {
      const { data: membershipOfferToUpdate } = await this.findMembershipOffer(membershipOfferId);

      const membershipOfferUpdated = await this.prismaService.membershipOffer.update({ where: { id: membershipOfferToUpdate['id'] }, data: updateMembershipOfferDto });

      return {
        status: 'ok',
        message: "success",
        data: membershipOfferUpdated
      }
    } catch (error) {
      throw new BadRequestException(`Error to update membership offer with id ${membershipOfferId}. ${error}`);
    }
  }

  async deleteMembershipOffer(membershipOfferId: string): Promise<MembershipOfferResponse> {
    try {
      const { data: membershipOfferToDelete } = await this.findMembershipOffer(membershipOfferId);

      const membershipOfferDeleted = await this.prismaService.membershipOffer.delete({ where: { id: membershipOfferToDelete['id'] } });

      return {
        status: 'ok',
        message: "success",
        data: membershipOfferDeleted
      }
    } catch (error) {
      throw new BadRequestException(`Error to delete membership offer with id ${membershipOfferId}. ${error}`);
    }
  }
}
