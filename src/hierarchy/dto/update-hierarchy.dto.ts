import { PartialType } from '@nestjs/swagger';
import { CreateHierarchyDto } from './create-hierarchy.dto';

export class UpdateHierarchyDto extends PartialType(CreateHierarchyDto) {}
