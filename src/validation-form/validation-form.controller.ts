import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ValidationFormService } from './validation-form.service';
import { CreateValidationFormDto } from './dto/create-validation-form.dto';
import { UpdateValidationFormDto } from './dto/update-validation-form.dto';

@Controller('validation-form')
export class ValidationFormController {
  constructor(private readonly validationFormService: ValidationFormService) {}

  @Post()
  create(@Body() createValidationFormDto: CreateValidationFormDto) {
    return this.validationFormService.create(createValidationFormDto);
  }

  @Get()
  findAll() {
    return this.validationFormService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.validationFormService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateValidationFormDto: UpdateValidationFormDto) {
    return this.validationFormService.update(+id, updateValidationFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.validationFormService.remove(+id);
  }
}
