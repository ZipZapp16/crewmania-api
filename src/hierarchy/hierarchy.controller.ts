import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HierarchyService } from './hierarchy.service';
import { CreateHierarchyDto } from './dto/create-hierarchy.dto';
import { UpdateHierarchyDto } from './dto/update-hierarchy.dto';

@Controller('hierarchy')
export class HierarchyController {
  constructor(private readonly hierarchyService: HierarchyService) {}

  @Post()
  create(@Body() createHierarchyDto: CreateHierarchyDto) {
    return this.hierarchyService.create(createHierarchyDto);
  }

  @Get()
  findAll() {
    return this.hierarchyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hierarchyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHierarchyDto: UpdateHierarchyDto) {
    return this.hierarchyService.update(+id, updateHierarchyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hierarchyService.remove(+id);
  }
}
