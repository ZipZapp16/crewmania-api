import { Injectable } from '@nestjs/common';
import { CreatePhotographDto } from './dto/create-photograph.dto';
import { UpdatePhotographDto } from './dto/update-photograph.dto';

@Injectable()
export class PhotographService {
  create(createPhotographDto: CreatePhotographDto) {
    return 'This action adds a new photograph';
  }

  findAll() {
    return `This action returns all photograph`;
  }

  findOne(id: number) {
    return `This action returns a #${id} photograph`;
  }

  update(id: number, updatePhotographDto: UpdatePhotographDto) {
    return `This action updates a #${id} photograph`;
  }

  remove(id: number) {
    return `This action removes a #${id} photograph`;
  }
}
