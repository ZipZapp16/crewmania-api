import { Injectable } from '@nestjs/common';
import { CreateValidationFormDto } from './dto/create-validation-form.dto';
import { UpdateValidationFormDto } from './dto/update-validation-form.dto';

@Injectable()
export class ValidationFormService {
  create(createValidationFormDto: CreateValidationFormDto) {
    return 'This action adds a new validationForm';
  }

  findAll() {
    return `This action returns all validationForm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} validationForm`;
  }

  update(id: number, updateValidationFormDto: UpdateValidationFormDto) {
    return `This action updates a #${id} validationForm`;
  }

  remove(id: number) {
    return `This action removes a #${id} validationForm`;
  }
}
