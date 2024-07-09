import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLogDto, UpdateLogDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';
import { LogsResponse } from './interfaces';

@Injectable()
export class LogsService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }

  async create(createLogDto: CreateLogDto): Promise<LogsResponse> {
    try {
      const log = await this.prismaService.log.create({ data: createLogDto });

      return {
        status: "ok",
        message: "success",
        data: log
      };
    } catch (error) {
      throw new BadRequestException(`Error to create log. ${error}`);
    };
  }

  async findAll(): Promise<LogsResponse> {
    try {
      const logs = await this.prismaService.log.findMany();

      return {
        status: "ok",
        message: "success",
        data: logs
      };
    } catch (error) {
      throw new BadRequestException(`Error to find logs. ${error}`);
    }
  }

  async findOne(logId: string): Promise<LogsResponse> {
    try {
      const log = await this.prismaService.log.findUnique({ where: { id: logId }});

      return {
        status: "ok",
        message: "success",
        data: log
      };
    } catch (error) {
      throw new BadRequestException(`Error to find log with id ${logId}. ${error}`);
    }
  }

  async update(logId: string, updateLogDto: UpdateLogDto): Promise<LogsResponse> {
    try {
      const { data: logToUpdate } = await this.findOne(logId);

      const logUpdated = await this.prismaService.log.update({ where: { id: logToUpdate['id'] }, data: updateLogDto });

      return {
        status: "ok",
        message: "success",
        data: logUpdated
      };
    } catch (error) {
      throw new BadRequestException(`Error to update log with id ${logId}. ${error}`);
    }
  }

  async remove(logId: string): Promise<LogsResponse> {
    try {
      const { data: logToDelete } = await this.findOne(logId);

      const logDeleted = await this.prismaService.log.delete({ where: { id: logToDelete['id'] } });

      return {
        status: "ok",
        message: "success",
        data: logDeleted
      };
    } catch (error) {
      throw new BadRequestException(`Error to delete log with id ${logId}. ${error}`);
    }
  }
}
