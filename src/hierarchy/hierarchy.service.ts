import { Injectable } from '@nestjs/common';
import { CreateHierarchyDto } from './dto/create-hierarchy.dto';
import { UpdateHierarchyDto } from './dto/update-hierarchy.dto';

@Injectable()
export class HierarchyService {
  create(createHierarchyDto: CreateHierarchyDto) {
    return 'This action adds a new hierarchy';
  }

  findAll() {
    return `This action returns all hierarchy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hierarchy`;
  }

  update(id: number, updateHierarchyDto: UpdateHierarchyDto) {
    return `This action updates a #${id} hierarchy`;
  }

  remove(id: number) {
    return `This action removes a #${id} hierarchy`;
  }
}
