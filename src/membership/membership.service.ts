import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Membership, MembershipOffer, Prisma } from '@prisma/client';
import { CreateMembershipOfferDto } from './dto/create-membership-offer.dto';

@Injectable()
export class MembershipService {

  constructor(
    // private jwtService: JwtService,
    private prismaService: PrismaService
  ) { }

  async createMembership(createMembershipDto: CreateMembershipDto): Promise<Membership> {
    const { membershipOffersId, ...restOfData } = createMembershipDto;

    const data: Prisma.MembershipCreateInput = {
      ...restOfData,
      membershipOffers: membershipOffersId ? { connect: { id: membershipOffersId }} : undefined
    };

    try {
      const membership = await this.prismaService.membership.create({
        data
      });

      return membership;
    } catch (error) {
      console.log(error)
      throw new BadRequestException(`Error al crear membresia. ${error}`);
    }
  }

  async findAll(): Promise<Membership[]> {
    try {
      const memberships = await this.prismaService.membership.findMany();

      return memberships;
    } catch (error) {
      throw new BadRequestException('Error al crear membresia.');
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} membership`;
  }

  update(id: number, updateMembershipDto: UpdateMembershipDto) {
    return `This action updates a #${id} membership`;
  }

  remove(id: number) {
    return `This action removes a #${id} membership`;
  }

  // * Comienzan logica para offers
  async createMembershipOffer(createMembershipOfferDto: CreateMembershipOfferDto) {
    try {
      const membershipOffer = await this.prismaService.membershipOffer.create({
        data: createMembershipOfferDto
      });

      return membershipOffer;
    } catch (error) {
      throw new BadRequestException(`Error al crear membresia. ${error}`);
    }
  }

  async findAllOffers(): Promise<MembershipOffer[]> {
    try {
      const offers = await this.prismaService.membershipOffer.findMany();

      return offers;
    } catch (error) {
     console.log(error) 

     throw new NotFoundException('No hay ofertas registradas.');
    }
  }
}
