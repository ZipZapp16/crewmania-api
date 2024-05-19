import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { CreateHierarchyDto } from './dto/create-hierarchy.dto';
import { Headquarter, Hierarchy, Position, PositionsHerarchy, Prisma } from '@prisma/client';
import { CreateHeadquarterDto } from 'src/headquarter/dto/create-headquarter.dto';
import { CreatePositionHierarchyDto } from './dto/create-position-hierarchy.dto';

@Injectable()
export class OccupancyService {
  constructor(private readonly prismaService: PrismaService) { }

  async createPosition(createPositionDto: CreatePositionDto): Promise<Position> {
    try {
      const position = await this.prismaService.position.create({ data: createPositionDto });

      return position;
    } catch (error) {
      console.log(error)
      throw new BadRequestException(`Error al crear la validacion ${error}`);
    }
  }

  async findAllPositions(): Promise<Position[]> {
    try {
      const positions = await this.prismaService.position.findMany();

      return positions;
    } catch (error) {
      console.log(error)
      throw new NotFoundException("No se encontraron roles disponibles.");
    }
  }

  async createHierarchys(createHierarchyDto: CreateHierarchyDto): Promise<Hierarchy> {
    try {
      const newHierarchy = await this.prismaService.hierarchy.create({ data: createHierarchyDto });

      return newHierarchy;
    } catch (error) {
      console.log(error)
      throw new BadRequestException(`Error al crear la validacion ${error}`);
    }
  }

  async findAllHierarchys(): Promise<Hierarchy[]> {
    try {
      const hierarchys = await this.prismaService.hierarchy.findMany();
      return hierarchys;
    } catch (error) {
      console.log(error)
      throw new NotFoundException("No se encontraron jerarquias disponibles.");
    }
  }

  async creatHeadquarter(createHeadquarterDto: CreateHeadquarterDto): Promise<Headquarter> {
    try {
      const newHeadquarter = await this.prismaService.headquarter.create({ data: createHeadquarterDto });

      return newHeadquarter;
    } catch (error) {
      console.log(error)
      throw new BadRequestException(`Error al crear la validacion ${error}`);
    }
  }

  async findAllHeadquarters(): Promise<Headquarter[]> {
    try {
      const headquarters = await this.prismaService.headquarter.findMany();

      return headquarters;
    } catch (error) {
      console.log(error)
      throw new NotFoundException("No se encontraron jerarquias disponibles.");
    }
  }

  async createPositionHierarchy(createPositionHierarchyDto: CreatePositionHierarchyDto): Promise<PositionsHerarchy> {
    try {

      const { herarchyId, positionId, ...restOfData } = createPositionHierarchyDto;

      const data: Prisma.PositionsHerarchyCreateInput = {
        ...restOfData,
        position: positionId ? { connect: { id: positionId } } : undefined,
        hierarchy: herarchyId ? { connect: { id: herarchyId } } : undefined,
      };

      const newPosHier = await this.prismaService.positionsHerarchy.create({ data });

      return newPosHier;
    } catch (error) {
      console.log(error)
      throw new BadRequestException(`Error al crear la validacion ${error}`);
    }
  }

  async findAllPositionHerarchys(): Promise<PositionsHerarchy[]> {
    try {
      const posHerar = await this.prismaService.positionsHerarchy.findMany();

      return posHerar;
    } catch (error) {
      console.log(error)
      throw new NotFoundException("No se encontraron jerarquias disponibles.");
    }
  }

  // create(createOccupancyDto: CreateOccupancyDto) {
  //   return 'This action adds a new occupancy';
  // }

  // findAll() {
  //   return `This action returns all occupancy`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} occupancy`;
  // }

  // update(id: number, updateOccupancyDto: UpdateOccupancyDto) {
  //   return `This action updates a #${id} occupancy`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} occupancy`;
  // }
}
