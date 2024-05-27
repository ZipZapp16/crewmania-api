import { PartialType } from '@nestjs/swagger';
import { CreateUserValidationDto } from './create-user-validation.dto';

export class UpdateUserValidationDto extends PartialType(CreateUserValidationDto) {}
