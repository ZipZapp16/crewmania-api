import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { VersionService } from './version.service';
import { CreateVersionDto, UpdateVersionDto } from './dto';
import { VersionResponse } from './interfaces';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces';

@ApiTags('Version')
@ApiBearerAuth()
@Controller('version')
export class VersionController {
  constructor(private readonly versionService: VersionService) {}

  @Post('/create')
  @Auth(ValidRoles.admin)
  create(@Body() createVersionDto: CreateVersionDto): Promise<VersionResponse> {
    return this.versionService.create(createVersionDto);
  }

  @Get('/findAll')
  @Auth(ValidRoles.admin, ValidRoles.user)
  findAll(): Promise<VersionResponse> {
    return this.versionService.findAll();
  }

  @Get('/:versionId/findOne')
  @Auth(ValidRoles.admin, ValidRoles.user)
  findOne(@Param('versionId', ParseUUIDPipe) versionId: string): Promise<VersionResponse> {
    return this.versionService.findOne(versionId);
  }

  @Patch('/:versionId/update')
  @Auth(ValidRoles.admin)
  update(@Param('versionId', ParseUUIDPipe) versionId: string, @Body() updateVersionDto: UpdateVersionDto): Promise<VersionResponse> {
    return this.versionService.update(versionId, updateVersionDto);
  }

  @Delete('/:versionId/delete')
  @Auth(ValidRoles.admin)
  remove(@Param('versionId', ParseUUIDPipe) versionId: string): Promise<VersionResponse> {
    return this.versionService.remove(versionId);
  }
}
