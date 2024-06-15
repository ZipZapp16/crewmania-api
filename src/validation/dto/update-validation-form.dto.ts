import { PartialType } from '@nestjs/swagger';
import { CreateValidationFormDto } from './create-validation-form.dto';

export class UpdateValidationFormDto extends PartialType(CreateValidationFormDto) {}
