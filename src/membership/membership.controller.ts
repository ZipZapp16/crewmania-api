import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
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
  findAllMembership(): Promise<Membership[]> {
    return this.membershipService.findAllMembership();
  }

  @Get(':id')
  findOneMembership(@Param('id', ParseUUIDPipe) id: string): Promise<Membership> {
    return this.membershipService.findOneMembership(id);
  }

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
