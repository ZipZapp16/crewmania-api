import { PartialType } from '@nestjs/swagger';
import { CreateMembershipOfferDto } from './create-membership-offer.dto';

export class UpdateMembershipOfferDto extends PartialType(CreateMembershipOfferDto) {}
