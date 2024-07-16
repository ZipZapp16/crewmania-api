import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SubscriptionService } from './subscription.service';
import { MembershipOfferResponse, MembershipResponse, OfferResponse, FindMembershipOfferResponse, MembershipPricesResponse } from './interfaces';
import { CreateOfferDto, UpdateMembershipDto, UpdateMembershipOfferDto, UpdateOfferDto, CreateMembershipDto, CreateMembershipOfferDto } from './dto';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces';

@ApiTags('Subscription')
@ApiBearerAuth()
@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) { }

  @Post('/membership')
  @Auth(ValidRoles.admin)
  createMembership(@Body() createMembershipDto: CreateMembershipDto): Promise<MembershipResponse> {
    return this.subscriptionService.createMembership(createMembershipDto);
  }

  @Get('/membership/:membershipId')
  @Auth(ValidRoles.admin, ValidRoles.user)
  findMembership(@Param('membershipId', ParseUUIDPipe) membershipId: string): Promise<MembershipResponse> {
    return this.subscriptionService.findMembership(membershipId);
  }

  @Get('/memberships')
  @Auth(ValidRoles.admin, ValidRoles.user)
  findAllMembership(): Promise<MembershipResponse> {
    return this.subscriptionService.findAllMembership();
  }

  @Patch('/membership/:membershipId')
  @Auth(ValidRoles.admin)
  updateMembership(
    @Param('membershipId', ParseUUIDPipe) membershipId: string,
    @Body() updateMembershipDto: UpdateMembershipDto
  ): Promise<MembershipResponse> {
    return this.subscriptionService.updateMembership(membershipId, updateMembershipDto);
  }

  @Delete('/membership/:membershipId')
  @Auth(ValidRoles.admin)
  deleteMembership(@Param('membershipId', ParseUUIDPipe) membershipId: string): Promise<MembershipResponse> {
    return this.subscriptionService.deleteMembership(membershipId);
  }

  // * Comienzan endpoints para offers
  @Post('/offer')
  @Auth(ValidRoles.admin)
  createOffer(@Body() createOfferDto: CreateOfferDto): Promise<OfferResponse> {
    return this.subscriptionService.createOffer(createOfferDto);
  }

  @Get('/offer/:offerId')
  @Auth(ValidRoles.admin, ValidRoles.user)
  findOffer(@Param('offerId', ParseUUIDPipe) offerId: string): Promise<OfferResponse> {
    return this.subscriptionService.findOffer(offerId);
  }

  @Get("/offers")
  @Auth(ValidRoles.admin, ValidRoles.user)
  findAllOffers(): Promise<OfferResponse> {
    return this.subscriptionService.findAllOffers();
  }

  @Patch('/offer/:offerId')
  @Auth(ValidRoles.admin)
  updateOffer(
    @Param('offerId', ParseUUIDPipe) offerId: string,
    @Body() updateOfferDto: UpdateOfferDto
  ): Promise<OfferResponse> {
    return this.subscriptionService.updateOffer(offerId, updateOfferDto);
  }

  @Delete('/offer/:offerId')
  @Auth(ValidRoles.admin)
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

  @Get('/membership-offers/membershipId/:membershipId/offers')
  findOffersByMembershipId(@Param('membershipId', ParseUUIDPipe) membershipId: string): Promise<FindMembershipOfferResponse> {
    return this.subscriptionService.findOffersByMembershipId(membershipId);
  }

  @Get('/membership-offers/membershipId/:membershipId')
  findMembershipOffersByMembershipId(@Param('membershipId', ParseUUIDPipe) membershipId: string): Promise<MembershipOfferResponse> {
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
