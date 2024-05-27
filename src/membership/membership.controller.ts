import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { CreateMembershipOfferDto } from './dto/create-membership-offer.dto';
import { Membership } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { MembershipOfferResponse, MembershipResponse } from './interfaces';

@ApiTags('Membership')
@Controller('membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) { }

  @Post()
  createMembership(@Body() createMembershipDto: CreateMembershipDto): Promise<MembershipResponse> {
    return this.membershipService.createMembership(createMembershipDto);
  }

  @Get()
  findAllMembership(): Promise<MembershipResponse> {
    return this.membershipService.findAllMembership();
  }

  @Get(':id')
  findOneMembership(@Param('id', ParseUUIDPipe) id: string): Promise<MembershipResponse> {
    return this.membershipService.findMembership(id);
  }

  // * Comienzan endpoints para offers
  @Post('/offers')
  createMembershipOffer(@Body() createMembershipOfferDto: CreateMembershipOfferDto): Promise<MembershipOfferResponse> {
    return this.membershipService.createMembershipOffer(createMembershipOfferDto);
  }

  @Get('/offers')
  findAllOffers(): Promise<MembershipOfferResponse> {
    return this.membershipService.findAllOffers();
  }
}
