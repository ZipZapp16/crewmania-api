import { PartialType } from '@nestjs/swagger';
import { CreatePhotographDto } from './create-photograph.dto';

export class UpdatePhotographDto extends PartialType(CreatePhotographDto) {}
