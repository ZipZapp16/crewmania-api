import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { LogsService } from './logs.service';
import { CreateLogDto, UpdateLogDto } from './dto';
import { LogsResponse } from './interfaces';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Logs')
@ApiBearerAuth()
@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Post('/create')
  createLog(@Body() createLogDto: CreateLogDto): Promise<LogsResponse> {
    return this.logsService.create(createLogDto);
  }

  @Get('/findAll')
  findAllLogs(): Promise<LogsResponse> {
    return this.logsService.findAll();
  }

  @Get('/:logId/findOne')
  findOneLog(@Param('logId', ParseUUIDPipe) logId: string): Promise<LogsResponse> {
    return this.logsService.findOne(logId);
  }

  @Patch('/:logId/update')
  updateLog(@Param('logId', ParseUUIDPipe) logId: string, @Body() updateLogDto: UpdateLogDto): Promise<LogsResponse> {
    return this.logsService.update(logId, updateLogDto);
  }

  @Delete('/:logId/delete')
  removeLog(@Param('logId', ParseUUIDPipe) logId: string): Promise<LogsResponse> {
    return this.logsService.remove(logId);
  }
}
