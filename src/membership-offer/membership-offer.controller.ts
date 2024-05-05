import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MembershipOfferService } from './membership-offer.service';
import { CreateMembershipOfferDto } from './dto/create-membership-offer.dto';
import { UpdateMembershipOfferDto } from './dto/update-membership-offer.dto';

@Controller('membership-offer')
export class MembershipOfferController {
  constructor(private readonly membershipOfferService: MembershipOfferService) {}

  @Post()
  create(@Body() createMembershipOfferDto: CreateMembershipOfferDto) {
    return this.membershipOfferService.create(createMembershipOfferDto);
  }

  @Get()
  findAll() {
    return this.membershipOfferService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membershipOfferService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMembershipOfferDto: UpdateMembershipOfferDto) {
    return this.membershipOfferService.update(+id, updateMembershipOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membershipOfferService.remove(+id);
  }
}
