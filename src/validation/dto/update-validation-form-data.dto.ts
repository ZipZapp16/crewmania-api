import { PartialType } from '@nestjs/swagger';
import { CreateValidationFormDataDto } from './create-validation-form-data.dto';

export class UpdateValidationFormDataDto extends PartialType(CreateValidationFormDataDto) {}
