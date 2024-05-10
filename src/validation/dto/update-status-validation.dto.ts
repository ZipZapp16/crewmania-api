import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusValidationDto } from './create-status-validation.dto';

export class UpdateStatusValidationDto extends PartialType(CreateStatusValidationDto) {}
