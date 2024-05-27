import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ValidationService } from './validation.service';
import { CreateValidationFormDto } from './dto/create-validation-form.dto';
import { CreateStatusValidationDto } from './dto/create-status-validation.dto';
import { ValidationResponse } from './interfaces/validation-response.interface';
import { StatusValidationResponse } from './interfaces/status-validation-response.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Validation')
@Controller('validation')
export class ValidationController {
  constructor(private readonly validationService: ValidationService) {}

  // * Comienzan endpoints para validationForms
  @Post('/forms')
  createValidationForm(@Body() createValidationDto: CreateValidationFormDto): Promise<ValidationResponse> {
    return this.validationService.createValidationForm(createValidationDto);
  }

  @Get('/forms')
  findAllValidationForms(): Promise<ValidationResponse> {
    return this.validationService.findAllValidationForms();
  }

  // * Comienzan endpoints para statusValidations
  @Post('/status')
  createStatusValidation(@Body() createStatusValidationDto: CreateStatusValidationDto): Promise<StatusValidationResponse> {
    return this.validationService.createStatusValidation(createStatusValidationDto);
  }

  @Get('/status')
  findAllStatusValidation(): Promise<StatusValidationResponse> {
    return this.validationService.findAllStatusValidation();
  }
}
