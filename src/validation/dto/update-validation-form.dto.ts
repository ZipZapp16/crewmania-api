import { PartialType } from '@nestjs/swagger';
import { CreateValidationFormDto } from './create-validation-form.dto';

export class UpdateValidationDto extends PartialType(CreateValidationFormDto) {}
