import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ValidationService } from './validation.service';
import { CreateValidationFormDto } from './dto/create-validation-form.dto';
import { CreateStatusValidationDto } from './dto/create-status-validation.dto';
import { ValidationResponse } from './interfaces/validation-response.interface';
import { StatusValidationResponse } from './interfaces/status-validation-response.interface';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UpdateValidationFormDto } from './dto/update-validation-form.dto';
import { UpdateStatusValidationDto } from './dto';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces';

@ApiTags('Validation')
@ApiBearerAuth()
@Controller('validation')
export class ValidationController {
  constructor(private readonly validationService: ValidationService) { }

  // * Comienzan endpoints para validationForms
  @Post('/forms')
  @Auth(ValidRoles.admin)
  createValidationForm(@Body() createValidationDto: CreateValidationFormDto): Promise<ValidationResponse> {
    return this.validationService.createValidationForm(createValidationDto);
  }

  @Get('/forms')
  @Auth(ValidRoles.admin, ValidRoles.user)
  findAllValidationForms(): Promise<ValidationResponse> {
    return this.validationService.findAllValidationForms();
  }

  @Get('/form/:formId')
  @Auth(ValidRoles.admin, ValidRoles.user)
  findValidationForm(@Param('formId', ParseUUIDPipe) formId: string): Promise<ValidationResponse> {
    return this.validationService.findValidationForm(formId);
  }

  @Patch('/form/:formId')
  @Auth(ValidRoles.admin)
  updateValidationForm(
    @Param('formId', ParseUUIDPipe) formId: string,
    @Body() updateValidationFormDto: UpdateValidationFormDto
  ): Promise<ValidationResponse> {
    return this.validationService.updateValidationForm(formId, updateValidationFormDto);
  }

  @Delete('/form/:formId')
  @Auth(ValidRoles.admin)
  deleteValidationForm(@Param('formId', ParseUUIDPipe) formId: string): Promise<ValidationResponse> {
    return this.validationService.deleteValidationForm(formId);
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

  @Get('/status/:statusId')
  findStatusValidation(@Param('statusId', ParseUUIDPipe) statusId: string): Promise<StatusValidationResponse> {
    return this.validationService.findStatusValidation(statusId);
  }

  @Patch('/status/:statusId')
  updateStatusValidation(
    @Param('statusId', ParseUUIDPipe) statusId: string,
    @Body() updateStatusValidationDto: UpdateStatusValidationDto
  ): Promise<StatusValidationResponse> {
    return this.validationService.updateStatusValidation(statusId, updateStatusValidationDto);
  }

  @Delete('/status/:statusId')
  deleteStatusValidation(@Param('statusId', ParseUUIDPipe) statusId: string): Promise<StatusValidationResponse> {
    return this.validationService.deleteStatusValidation(statusId);
  }
}
