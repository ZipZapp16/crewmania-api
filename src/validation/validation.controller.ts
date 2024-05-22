import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ValidationService } from './validation.service';
import { CreateValidationFormDto } from './dto/create-validation-form.dto';
import { UpdateValidationDto } from './dto/update-validation-form.dto';
import { StatusValidation, ValidationForm } from '@prisma/client';
import { CreateStatusValidationDto } from './dto/create-status-validation.dto';

@Controller('validation')
export class ValidationController {
  constructor(private readonly validationService: ValidationService) {}

  //* Comienzan endpoints para validationForms
  @Post('/forms')
  createValidationForm(@Body() createValidationDto: CreateValidationFormDto): Promise<ValidationForm> {
    return this.validationService.createValidationForm(createValidationDto);
  }

  @Get('/forms')
  findAll(): Promise<ValidationForm[]> {
    return this.validationService.findAllValidationForms();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.validationService.findOne(+id);
  // }

  // @Post(':id')
  // update(@Param('id') id: string, @Body() updateValidationDto: UpdateValidationDto) {
  //   return this.validationService.update(+id, updateValidationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.validationService.remove(+id);
  // }

  // * Comienzan endpoints para validationFormData
  // @Post('/upload-image') 
  // uploadUserImage() {

  // }

  // * Comienzan endpoints para statusValidations
  @Post('/status')
  createStatusValidation(@Body() createStatusValidationDto: CreateStatusValidationDto): Promise<StatusValidation> {
    return this.validationService.createStatusValidation(createStatusValidationDto);
  }

  @Get('/status')
  findAllStatusValidation(): Promise<StatusValidation[]> {
    return this.validationService.findAllStatusValidation();
  }
}
