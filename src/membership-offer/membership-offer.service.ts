import { Injectable } from '@nestjs/common';
import { CreateMembershipOfferDto } from './dto/create-membership-offer.dto';
import { UpdateMembershipOfferDto } from './dto/update-membership-offer.dto';

@Injectable()
export class MembershipOfferService {
  create(createMembershipOfferDto: CreateMembershipOfferDto) {
    return 'This action adds a new membershipOffer';
  }

  findAll() {
    return `This action returns all membershipOffer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} membershipOffer`;
  }

  update(id: number, updateMembershipOfferDto: UpdateMembershipOfferDto) {
    return `This action updates a #${id} membershipOffer`;
  }

  remove(id: number) {
    return `This action removes a #${id} membershipOffer`;
  }
}
