import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HeadquarterService } from './headquarter.service';
import { CreateHeadquarterDto } from './dto/create-headquarter.dto';
import { UpdateHeadquarterDto } from './dto/update-headquarter.dto';

@Controller('headquarter')
export class HeadquarterController {
  constructor(private readonly headquarterService: HeadquarterService) {}

  @Post()
  create(@Body() createHeadquarterDto: CreateHeadquarterDto) {
    return this.headquarterService.create(createHeadquarterDto);
  }

  @Get()
  findAll() {
    return this.headquarterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.headquarterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeadquarterDto: UpdateHeadquarterDto) {
    return this.headquarterService.update(+id, updateHeadquarterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.headquarterService.remove(+id);
  }
}
