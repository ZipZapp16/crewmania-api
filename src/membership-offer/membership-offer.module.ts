import { Module } from '@nestjs/common';
import { MembershipOfferService } from './membership-offer.service';
import { MembershipOfferController } from './membership-offer.controller';

@Module({
  controllers: [MembershipOfferController],
  providers: [MembershipOfferService],
})
export class MembershipOfferModule {}
