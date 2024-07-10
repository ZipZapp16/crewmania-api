import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { VersionService } from './version.service';
import { CreateVersionDto, UpdateVersionDto } from './dto';
import { VersionResponse } from './interfaces';

@Controller('version')
export class VersionController {
  constructor(private readonly versionService: VersionService) {}

  @Post('/create')
  create(@Body() createVersionDto: CreateVersionDto): Promise<VersionResponse> {
    return this.versionService.create(createVersionDto);
  }

  @Get('/findAll')
  findAll(): Promise<VersionResponse> {
    return this.versionService.findAll();
  }

  @Get('/:versionId/findOne')
  findOne(@Param('versionId', ParseUUIDPipe) versionId: string): Promise<VersionResponse> {
    return this.versionService.findOne(versionId);
  }

  @Patch('/:versionId/update')
  update(@Param('versionId', ParseUUIDPipe) versionId: string, @Body() updateVersionDto: UpdateVersionDto): Promise<VersionResponse> {
    return this.versionService.update(versionId, updateVersionDto);
  }

  @Delete('/:versionId/delete')
  remove(@Param('versionId', ParseUUIDPipe) versionId: string): Promise<VersionResponse> {
    return this.versionService.remove(versionId);
  }
}
