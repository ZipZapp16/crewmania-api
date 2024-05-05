import { Injectable } from '@nestjs/common';
import { CreateHeadquarterDto } from './dto/create-headquarter.dto';
import { UpdateHeadquarterDto } from './dto/update-headquarter.dto';

@Injectable()
export class HeadquarterService {
  create(createHeadquarterDto: CreateHeadquarterDto) {
    return 'This action adds a new headquarter';
  }

  findAll() {
    return `This action returns all headquarter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} headquarter`;
  }

  update(id: number, updateHeadquarterDto: UpdateHeadquarterDto) {
    return `This action updates a #${id} headquarter`;
  }

  remove(id: number) {
    return `This action removes a #${id} headquarter`;
  }
}
