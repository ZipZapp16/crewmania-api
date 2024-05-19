import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OccupancyService } from './occupancy.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { CreateHierarchyDto } from './dto/create-hierarchy.dto';
import { Headquarter, Hierarchy, Position, PositionsHerarchy } from '@prisma/client';
import { CreateHeadquarterDto } from 'src/headquarter/dto/create-headquarter.dto';
import { CreatePositionHierarchyDto } from './dto/create-position-hierarchy.dto';

@Controller('occupancy')
export class OccupancyController {
  constructor(private readonly occupancyService: OccupancyService) {}

  // * Comienzan endpoitns para positions
  @Post('/positions')
  createPosition(@Body() createPositionDto: CreatePositionDto): Promise<Position> {
    return this.occupancyService.createPosition(createPositionDto);
  }

  @Get('/positions')
  findAllPositions(): Promise<Position[]> {
    return this.occupancyService.findAllPositions();
  }

  // * Comienzan endpoitns para hierarchys
  @Post('/hierarchys')
  createHierarchys(@Body() createHierarchyDto: CreateHierarchyDto): Promise<Hierarchy> {
    return this.occupancyService.createHierarchys(createHierarchyDto);
  }

  @Get('/hierarchys')
  findAllHierarchys(): Promise<Hierarchy[]> {
    return this.occupancyService.findAllHierarchys();
  }

  // * Comienzan endpoints para headquartes
  @Post('/headquartes')
  creatHeadquarter(@Body() createHeadquarterDto: CreateHeadquarterDto): Promise<Headquarter> {
    return this.occupancyService.creatHeadquarter(createHeadquarterDto);
  }

  @Get('/headquartes')
  findAllHeadquarters(): Promise<Headquarter[]> {
    return this.occupancyService.findAllHeadquarters();
  }

  // * Comienzan endpoints para positionHerarchys
  @Post('/positionHerarchys')
  createPositionHierarchy(@Body() createPositionHierarchyDto: CreatePositionHierarchyDto) {
    return this.occupancyService.createPositionHierarchy(createPositionHierarchyDto);
  }

  @Get('/positionHerarchys')
  findAllPositionsHerarchys(): Promise<PositionsHerarchy[]> {
    return this.occupancyService.findAllPositionHerarchys();
  }
  

  // @Post()
  // create(@Body() createOccupancyDto: CreateOccupancyDto) {
  //   return this.occupancyService.create(createOccupancyDto);
  // }

  // @Get()
  // findAll() {
  //   return this.occupancyService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.occupancyService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateOccupancyDto: UpdateOccupancyDto) {
  //   return this.occupancyService.update(+id, updateOccupancyDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.occupancyService.remove(+id);
  // }
}
