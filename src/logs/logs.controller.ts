import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogsService } from './logs.service';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { LogsResponse } from './interfaces';

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
  findOneLog(@Param('logId') logId: string): Promise<LogsResponse> {
    return this.logsService.findOne(logId);
  }

  @Patch('/:logId/update')
  updateLog(@Param('logId') logId: string, @Body() updateLogDto: UpdateLogDto): Promise<LogsResponse> {
    return this.logsService.update(logId, updateLogDto);
  }

  @Delete('/:logId/delete')
  removeLog(@Param('logId') logId: string): Promise<LogsResponse> {
    return this.logsService.remove(logId);
  }
}
