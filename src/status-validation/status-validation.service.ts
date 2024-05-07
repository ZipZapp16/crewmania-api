import { Injectable } from '@nestjs/common';
import { CreateStatusValidationDto } from './dto/create-status-validation.dto';
import { UpdateStatusValidationDto } from './dto/update-status-validation.dto';

@Injectable()
export class StatusValidationService {
  create(createStatusValidationDto: CreateStatusValidationDto) {
    return 'This action adds a new statusValidation';
  }

  findAll() {
    return `This action returns all statusValidation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} statusValidation`;
  }

  update(id: number, updateStatusValidationDto: UpdateStatusValidationDto) {
    return `This action updates a #${id} statusValidation`;
  }

  remove(id: number) {
    return `This action removes a #${id} statusValidation`;
  }
}
