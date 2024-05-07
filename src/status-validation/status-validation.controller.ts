import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusValidationService } from './status-validation.service';
import { CreateStatusValidationDto } from './dto/create-status-validation.dto';
import { UpdateStatusValidationDto } from './dto/update-status-validation.dto';

@Controller('status-validation')
export class StatusValidationController {
  constructor(private readonly statusValidationService: StatusValidationService) {}

  @Post()
  create(@Body() createStatusValidationDto: CreateStatusValidationDto) {
    return this.statusValidationService.create(createStatusValidationDto);
  }

  @Get()
  findAll() {
    return this.statusValidationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusValidationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatusValidationDto: UpdateStatusValidationDto) {
    return this.statusValidationService.update(+id, updateStatusValidationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusValidationService.remove(+id);
  }
}
