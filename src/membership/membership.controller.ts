import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { CreateMembershipOfferDto } from './dto/create-membership-offer.dto';
import { ApiTags } from '@nestjs/swagger';
import { MembershipOfferResponse, MembershipResponse, OfferResponse } from './interfaces';
import { CreateOfferDto } from './dto';
import { FindMembershipOfferResponse } from './interfaces/membership-offer-response.interface';

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
  findMembership(@Param('id', ParseUUIDPipe) id: string): Promise<MembershipResponse> {
    return this.membershipService.findMembership(id);
  }

  // * Comienzan endpoints para offers
  @Post('/offers')
  createOffer(@Body() createOfferDto: CreateOfferDto): Promise<OfferResponse> {
    return this.membershipService.createOffer(createOfferDto);
  }

  @Get('/offers')
  findAllOffers(): Promise<OfferResponse> {
    return this.membershipService.findAllOffers();
  }

  // * Comienzan endpoints para membership offers
  @Post('/membership-offers')
  createMembershipOffer(@Body() createMembershipOfferDto: CreateMembershipOfferDto): Promise<MembershipOfferResponse> {
    return this.membershipService.createMembershipOffer(createMembershipOfferDto);
  }

  @Get('/membership-offers')
  findAllMembershipOffers(): Promise<MembershipOfferResponse> {
    return this.membershipService.findAllMembershipOffers();
  }

  @Get('/membership-offer/:membershipId')
  findMembershipOffer(@Param('membershipId', ParseUUIDPipe) membershipId: string): Promise<FindMembershipOfferResponse> {
    return this.membershipService.findMembershipOffer(membershipId);
  }
}
