import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhotographService } from './photograph.service';
import { CreatePhotographDto } from './dto/create-photograph.dto';
import { UpdatePhotographDto } from './dto/update-photograph.dto';

@Controller('photograph')
export class PhotographController {
  constructor(private readonly photographService: PhotographService) {}

  @Post()
  create(@Body() createPhotographDto: CreatePhotographDto) {
    return this.photographService.create(createPhotographDto);
  }

  @Get()
  findAll() {
    return this.photographService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photographService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhotographDto: UpdatePhotographDto) {
    return this.photographService.update(+id, updatePhotographDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photographService.remove(+id);
  }
}
