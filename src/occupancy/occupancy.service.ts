import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateHeadquarterDto, CreateHierarchyDto, CreatePositionDto, CreatePositionHierarchyDto, UpdatePositionDto } from "./dto";
import { HeadquarterResponse, HierarchyResponse, PositionHierarchyResponse, PositionResponse } from "./interfaces";
import { UpdateHierarchyDto } from './dto/update-hierarchy.dto';
import { UpdateHeadquarterDto } from './dto/update-headquarter.dto';

@Injectable()
export class OccupancyService {
  constructor(private readonly prismaService: PrismaService) { }

  async createPosition(createPositionDto: CreatePositionDto): Promise<PositionResponse> {
    try {
      const position = await this.prismaService.position.create({ data: createPositionDto });

      return {
        message: 'success',
        status: 'ok',
        data: position
      };
    } catch (error) {
      console.log(error)
      throw new BadRequestException(`Error al crear la validacion ${error}`);
    }
  }

  async findPosition(positionId: string): Promise<PositionResponse> {
    try {
      const position = await this.prismaService.position.findUnique({ where: { id: positionId } });

      return {
        status: "ok",
        message: "success",
        data: position
      };
    } catch (error) {
      throw new NotFoundException(`The position with id: ${positionId} doesn't exist`);
    }
  }

  async findAllPositions(): Promise<PositionResponse> {
    try {
      const positions = await this.prismaService.position.findMany();

      return {
        message: 'success',
        status: 'ok',
        data: positions
      };
    } catch (error) {
      console.log(error)
      throw new NotFoundException(`Doesn't exists positions.`);
    }
  }

  async updatePosition(positionId: string, updatePositionDto: UpdatePositionDto): Promise<PositionResponse> {
    const { name } = updatePositionDto;
    const { data } = await this.findPosition(positionId);

    try {
      const positionUpdated = await this.prismaService.position.update({ data: { name }, where: { id: data['id'] } });

      return {
        status: 'ok',
        message: 'success',
        data: positionUpdated
      }
    } catch (error) {
      throw new BadRequestException(`Error to update position with id ${positionId}`);
    }
  }

  async deletePosition(positionId: string): Promise<PositionResponse> {
    try {
      const position = await this.findPosition(positionId);

      const positionDeleted = await this.prismaService.position.delete({ where: { id: position.data['id'] } });

      return {
        status: 'ok',
        message: 'success',
        data: positionDeleted
      }
    } catch (error) {
      throw new BadRequestException(`Error to delete position with id ${positionId}.`);
    }
  }

  async createHierarchys(createHierarchyDto: CreateHierarchyDto): Promise<HierarchyResponse> {
    try {
      const newHierarchy = await this.prismaService.hierarchy.create({ data: createHierarchyDto });

      return {
        message: 'success',
        status: 'ok',
        data: newHierarchy
      };
    } catch (error) {
      console.log(error)
      throw new BadRequestException(`Error al crear la validacion ${error}`);
    }
  }

  async findHierarchy(hierarchyId: string): Promise<HierarchyResponse> {
    try {
      const hierarchy = await this.prismaService.hierarchy.findUnique({ where: { id: hierarchyId } });

      return {
        status: "ok",
        message: "success",
        data: hierarchy
      }
    } catch (error) {
      throw new NotFoundException(`Hierarchy with id ${hierarchyId} doesn't exist.`);
    }
  }

  async findAllHierarchys(): Promise<HierarchyResponse> {
    try {
      const hierarchys = await this.prismaService.hierarchy.findMany();

      return {
        message: 'success',
        status: 'ok',
        data: hierarchys
      };
    } catch (error) {
      console.log(error)
      throw new NotFoundException("No se encontraron jerarquias disponibles.");
    }
  }

  async updateHierarchy(hierarchyId: string, updateHierarchyDto: UpdateHierarchyDto): Promise<HierarchyResponse> {
    try {
      const { data: hierarchy } = await this.findHierarchy(hierarchyId);
      const { name } = updateHierarchyDto;

      const hierarchyUpdate = await this.prismaService.hierarchy.update({ where: { id: hierarchy['id'] }, data: { name } });

      return {
        status: "ok",
        message: "success",
        data: hierarchyUpdate
      }
    } catch (error) {
      throw new BadRequestException(`Error to update hierarchy with id ${hierarchyId}. ${error}`);
    }
  }

  async deleteHierarchy(hierarchyId: string): Promise<HierarchyResponse> {
    try {
      const { data: hierarchy } = await this.findHierarchy(hierarchyId);

      const hierarchyDeleted = await this.prismaService.hierarchy.delete({ where: { id: hierarchy['id'] } });

      return {
        status: "ok",
        message: "success",
        data: hierarchyDeleted
      }
    } catch (error) {
      throw new BadRequestException(`Error to delete hierarchy with id ${hierarchyId}. ${error}`);
    }
  }

  async createHeadquarter(createHeadquarterDto: CreateHeadquarterDto): Promise<HeadquarterResponse> {
    try {
      const newHeadquarter = await this.prismaService.headquarter.create({ data: createHeadquarterDto });

      return {
        message: 'success',
        status: 'ok',
        data: newHeadquarter
      };
    } catch (error) {
      console.log(error)
      throw new BadRequestException(`Error al crear la validacion ${error}`);
    }
  }

  async findAllHeadquarters(): Promise<HeadquarterResponse> {
    try {
      const headquarters = await this.prismaService.headquarter.findMany();

      return {
        message: 'success',
        status: 'ok',
        data: headquarters
      };
    } catch (error) {
      console.log(error)
      throw new NotFoundException("No se encontraron jerarquias disponibles.");
    }
  }

  async findHeadquarter(headquarterId: string): Promise<HeadquarterResponse> {
    try {
      const headquarter = await this.prismaService.headquarter.findUnique({ where: { id: headquarterId } });

      return {
        status: "ok",
        message: "success",
        data: headquarter
      }
    } catch (error) {
      throw new NotFoundException(`Headquarter with id ${headquarterId} doesn't exist. `)
    }
  }

  async updateHeadquarter(headquarterId: string, updateHeadquarterDto: UpdateHeadquarterDto): Promise<HeadquarterResponse> {
    try {
      const { data: headquarter } = await this.findHeadquarter(headquarterId);

      const headquarterToUpdate = await this.prismaService.headquarter.update({ where: { id: headquarter['id'] }, data: updateHeadquarterDto });

      return {
        status: "ok",
        message: "success",
        data: headquarterToUpdate
      }
    } catch (error) {
      throw new BadRequestException(`Error to update the headquarter with id ${headquarterId}. ${error}`);
    }
  }

  async deleteHeadquarter(headquarterId: string): Promise<HeadquarterResponse> {
    try {
      const headquarter = this.findHeadquarter(headquarterId);

      const headquarterToDelete = await this.prismaService.headquarter.delete({ where: { id: headquarter['id'] } });

      return {
        status: "ok",
        message: "success",
        data: headquarterToDelete
      }
    } catch (error) {
      throw new BadRequestException(`Error to delete the headquarter with id ${headquarterId}.`);
    }
  }

  async createPositionHierarchy(createPositionHierarchyDto: CreatePositionHierarchyDto): Promise<PositionHierarchyResponse> {
    try {

      const { hierarchyId, positionId, ...restOfData } = createPositionHierarchyDto;

      const data: Prisma.PositionsHerarchyCreateInput = {
        ...restOfData,
        position: positionId ? { connect: { id: positionId } } : undefined,
        hierarchy: hierarchyId ? { connect: { id: hierarchyId } } : undefined,
      };

      const newPosHier = await this.prismaService.positionsHerarchy.create({ data });

      return {
        message: 'success',
        status: 'ok',
        data: newPosHier
      }
    } catch (error) {
      console.log(error)
      throw new BadRequestException(`Error al crear la validacion ${error}`);
    }
  }

  async findAllPositionHerarchys(): Promise<PositionHierarchyResponse> {
    try {
      const posHerar = await this.prismaService.positionsHerarchy.findMany();

      return {
        message: 'success',
        status: 'ok',
        data: posHerar
      }
    } catch (error) {
      console.log(error)
      throw new NotFoundException("No se encontraron jerarquias disponibles.");
    }
  }
}
