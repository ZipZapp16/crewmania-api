import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SubscriptionService } from './subscription.service';
import { MembershipOfferResponse, MembershipResponse, OfferResponse, FindMembershipOfferResponse } from './interfaces';
import { CreateOfferDto, UpdateMembershipDto, UpdateMembershipOfferDto, UpdateOfferDto, CreateMembershipDto, CreateMembershipOfferDto } from './dto';

@ApiTags('Subscription')
@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) { }

  @Post('/membership')
  createMembership(@Body() createMembershipDto: CreateMembershipDto): Promise<MembershipResponse> {
    return this.subscriptionService.createMembership(createMembershipDto);
  }

  @Get('/membership/:membershipId')
  findMembership(@Param('membershipId', ParseUUIDPipe) membershipId: string): Promise<MembershipResponse> {
    return this.subscriptionService.findMembership(membershipId);
  }

  @Get('/memberships')
  findAllMembership(): Promise<MembershipResponse> {
    return this.subscriptionService.findAllMembership();
  }

  @Patch('/membership/:membershipId')
  updateMembership(
    @Param('membershipId', ParseUUIDPipe) membershipId: string,
    @Body() updateMembershipDto: UpdateMembershipDto
  ): Promise<MembershipResponse> {
    return this.subscriptionService.updateMembership(membershipId, updateMembershipDto);
  }

  @Delete('/membership/:membershipId')
  deleteMembership(@Param('membershipId', ParseUUIDPipe) membershipId: string): Promise<MembershipResponse> {
    return this.subscriptionService.deleteMembership(membershipId);
  }

  // * Comienzan endpoints para offers
  @Post('/offer')
  createOffer(@Body() createOfferDto: CreateOfferDto): Promise<OfferResponse> {
    return this.subscriptionService.createOffer(createOfferDto);
  }

  @Get('/offer/:offerId')
  findOffer(@Param('offerId', ParseUUIDPipe) offerId: string): Promise<OfferResponse> {
    return this.subscriptionService.findOffer(offerId);
  }

  @Get("/offers")
  findAllOffers(): Promise<OfferResponse> {
    return this.subscriptionService.findAllOffers();
  }

  @Patch('/offer/:offerId')
  updateOffer(
    @Param('offerId', ParseUUIDPipe) offerId: string,
    @Body() updateOfferDto: UpdateOfferDto
  ): Promise<OfferResponse> {
    return this.subscriptionService.updateOffer(offerId, updateOfferDto);
  }

  @Delete('/offer/:offerId')
  deleteOffer(@Param('offerId', ParseUUIDPipe) offerId: string): Promise<OfferResponse> {
    return this.subscriptionService.deleteOffer(offerId);
  }

  // * Comienzan endpoints para membership offers
  @Post('/membership-offers')
  createMembershipOffer(@Body() createMembershipOfferDto: CreateMembershipOfferDto): Promise<MembershipOfferResponse> {
    return this.subscriptionService.createMembershipOffer(createMembershipOfferDto);
  }

  @Get('/membership-offer/:membershipOfferId')
  findMembershipOffer(@Param('membershipOfferId', ParseUUIDPipe) membershipOfferId: string): Promise<MembershipOfferResponse> {
    return this.subscriptionService.findMembershipOffer(membershipOfferId);
  }

  @Get('/membership-offers')
  findAllMembershipOffers(): Promise<MembershipOfferResponse> {
    return this.subscriptionService.findAllMembershipOffers();
  }

  @Get('/membership-offers/:membershipId')
  findMembershipOffersByMembershipId(@Param('membershipId', ParseUUIDPipe) membershipId: string): Promise<FindMembershipOfferResponse> {
    return this.subscriptionService.findMembershipOffersByMembershipId(membershipId);
  }

  @Patch('/membership-offer/:membershipOfferId')
  updateMembershipOffer(
    @Param('membershipOfferId', ParseUUIDPipe) membershipOfferId: string,
    @Body() updateMembershipOfferDto: UpdateMembershipOfferDto
  ): Promise<MembershipOfferResponse> {
    return this.subscriptionService.updateMembershipOffer(membershipOfferId, updateMembershipOfferDto);
  }

  @Delete('/membership-offer/:membershipOfferId')
  deleteMembershipOffer(@Param('membershipOfferId', ParseUUIDPipe) membershipOfferId: string): Promise<MembershipOfferResponse> {
    return this.subscriptionService.deleteMembershipOffer(membershipOfferId);
  }
}
