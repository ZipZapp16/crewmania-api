import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateHeadquarterDto, CreateHierarchyDto, CreatePositionDto, CreatePositionHierarchyDto } from "./dto";
import { HeadquarterResponse, HierarchyResponse, PositionHierarchyResponse, PositionResponse } from "./interfaces";

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
      throw new NotFoundException("No se encontraron roles disponibles.");
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

  async creatHeadquarter(createHeadquarterDto: CreateHeadquarterDto): Promise<HeadquarterResponse> {
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

  async createPositionHierarchy(createPositionHierarchyDto: CreatePositionHierarchyDto): Promise<PositionHierarchyResponse> {
    try {

      const { herarchyId, positionId, ...restOfData } = createPositionHierarchyDto;

      const data: Prisma.PositionsHerarchyCreateInput = {
        ...restOfData,
        position: positionId ? { connect: { id: positionId } } : undefined,
        hierarchy: herarchyId ? { connect: { id: herarchyId } } : undefined,
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
