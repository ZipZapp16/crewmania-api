import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';
import { CreateMembershipOfferDto } from './dto/create-membership-offer.dto';
import { Membership } from '@prisma/client';

@Controller('membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) { }

  @Post()
  createMembership(@Body() createMembershipDto: CreateMembershipDto): Promise<Membership> {
    return this.membershipService.createMembership(createMembershipDto);
  }

  @Get()
  findAll(): Promise<Membership[]> {
    return this.membershipService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.membershipService.findOne(+id);
  // }

  // @Get(':id')
  // remove(@Param('id') id: string) {
  //   return this.membershipService.remove(+id);
  // }

  // * Comienzan endpoints para offers
  @Post('/offers')
  createMembershipOffer(@Body() createMembershipOfferDto: CreateMembershipOfferDto) {
    return this.membershipService.createMembershipOffer(createMembershipOfferDto);
  }

  @Get('/offers')
  findAllOffers() {
    return this.membershipService.findAllOffers();
  }
}
