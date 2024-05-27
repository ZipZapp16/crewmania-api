import { PartialType } from '@nestjs/swagger';
import { CreatePositionHierarchyDto } from './create-position-hierarchy.dto';

export class UpdatePositionHierarchyDto extends PartialType(CreatePositionHierarchyDto) {}
