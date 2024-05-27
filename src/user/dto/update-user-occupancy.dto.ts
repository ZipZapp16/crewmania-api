import { PartialType } from '@nestjs/swagger';
import { CreateUserOccupancyDto } from './create-user-occupancy.dto';

export class UpdateUserOccupancyDto extends PartialType(CreateUserOccupancyDto) {}
