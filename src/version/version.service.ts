import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVersionDto, UpdateVersionDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';
import { VersionResponse } from './interfaces';

@Injectable()
export class VersionService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }

  async create(createVersionDto: CreateVersionDto): Promise<VersionResponse> {
    try {
      const newVersion = await this.prismaService.version.create({ data: createVersionDto });

      return {
        status: 'ok',
        message: 'success',
        data: newVersion
      };
    } catch (error) {
      throw new BadRequestException(`Error to create version. ${error}`);
    }
  }

  async findAll(): Promise<VersionResponse> {
    try {
      const versions = await this.prismaService.version.findMany();

      return {
        status: 'ok',
        message: 'success',
        data: versions
      };
    } catch (error) {
      throw new BadRequestException(`Error to find versions. ${error}`);
    }
  }

  async findOne(versionId: string): Promise<VersionResponse> { 
    try {
      const version = await this.prismaService.version.findUnique({ where: { id: versionId }});

      return {
        status: 'ok',
        message: 'success',
        data: version
      };
    } catch (error) {
      throw new BadRequestException(`Error to find version with id ${versionId}. ${error}`);
    }
  }

  async update(versionId: string, updateVersionDto: UpdateVersionDto): Promise<VersionResponse> {
    try {
      const { data: versionToUpdate } = await this.findOne(versionId);

      const versionUpdated = await this.prismaService.version.update({ where: { id: versionToUpdate['id'] }, data: updateVersionDto });

      return {
        status: 'ok',
        message: 'success',
        data: versionUpdated
      };
    } catch (error) {
      throw new BadRequestException(`Error to update version with id ${versionId}. ${error}`);
    }
  }

  async remove(versionId: string): Promise<VersionResponse> {
    try {
      const { data: versionToDelete } = await this.findOne(versionId);

      const versionDeleted = await this.prismaService.version.delete({ where: { id: versionToDelete['id'] }});

      return {
        status: 'ok',
        message: 'success',
        data: versionDeleted
      };
    } catch (error) {
      throw new BadRequestException(`Error to delete version with id ${versionId}. ${error}`);
    }
  }
}
