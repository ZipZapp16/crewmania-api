import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OccupancyService } from "./occupancy.service";
import { CreateHeadquarterDto, CreateHierarchyDto, CreatePositionDto, CreatePositionHierarchyDto, UpdateHeadquarterDto, UpdatePositionDto, UpdatePositionHierarchyDto } from "./dto";
import { HeadquarterResponse, HierarchyResponse, PositionHierarchyResponse, PositionResponse } from "./interfaces";
import { UpdateHierarchyDto } from './dto/update-hierarchy.dto';

@ApiTags('Occupancy')
@Controller('occupancy')
export class OccupancyController {
  constructor(private readonly occupancyService: OccupancyService) {}

  // * Comienzan endpoitns para positions
  @Post('/positions')
  createPosition(@Body() createPositionDto: CreatePositionDto): Promise<PositionResponse> {
    return this.occupancyService.createPosition(createPositionDto);
  }
  
  @Get('/position/:positionId')
  findPosition(@Param('positionId', ParseUUIDPipe) positionId: string): Promise<PositionResponse> {
    return this.occupancyService.findPosition(positionId);
  }

  @Get('/positions')
  findAllPositions(): Promise<PositionResponse> {
    return this.occupancyService.findAllPositions();
  }

  @Patch('/position/:positionId')
  updatePosition(
    @Param('positionId', ParseUUIDPipe) positionId: string, 
    @Body() updatePositionDto: UpdatePositionDto
  ): Promise<PositionResponse> {
    return this.occupancyService.updatePosition(positionId, updatePositionDto);
  }

  @Delete('/position/:positionId')
  deletePosition(@Param('positionId', ParseUUIDPipe) positionId: string): Promise<PositionResponse> {
    return this.occupancyService.deletePosition(positionId);
  }

  // * Comienzan endpoitns para hierarchys
  @Post('/hierarchys')
  createHierarchys(@Body() createHierarchyDto: CreateHierarchyDto): Promise<HierarchyResponse> {
    return this.occupancyService.createHierarchys(createHierarchyDto);
  }

  @Get('/hierarchy/:hierarchyId')
  findHierarchy(@Param('hierarchyId', ParseUUIDPipe) hierarchyId: string): Promise<HierarchyResponse> {
    return this.occupancyService.findHierarchy(hierarchyId);
  }

  @Get('/hierarchys')
  findAllHierarchys(): Promise<HierarchyResponse> {
    return this.occupancyService.findAllHierarchys();
  }

  @Patch('/hierarchy/:hierarchyId')
  updateHierarchy(
    @Param('hierarchyId', ParseUUIDPipe) hierarchyId: string,
    @Body() updateHierarchyDto: UpdateHierarchyDto
  ): Promise<HierarchyResponse> {
    return this.occupancyService.updateHierarchy(hierarchyId, updateHierarchyDto);
  }

  @Delete('/hierarchy/:hierarchyId')
  deleteHierarchy(
    @Param('hierarchyId', ParseUUIDPipe) hierarchyId: string
  ): Promise<HierarchyResponse> {
    return this.occupancyService.deleteHierarchy(hierarchyId);
  }

  // * Comienzan endpoints para headquartes
  @Post('/headquarters')
  creatHeadquarter(@Body() createHeadquarterDto: CreateHeadquarterDto): Promise<HeadquarterResponse> {
    return this.occupancyService.createHeadquarter(createHeadquarterDto);
  }

  @Get('/headquarter/:headquarterId')
  findHeadquarter(@Param('headquarterId', ParseUUIDPipe) headquarterId: string): Promise<HeadquarterResponse> {
    return this.occupancyService.findHeadquarter(headquarterId);
  }

  @Get('/headquarters')
  findAllHeadquarters(): Promise<HeadquarterResponse> {
    return this.occupancyService.findAllHeadquarters();
  }

  @Patch('/headquarter/:headquarterId')
  updateHeadquarter(
    @Param('headquarterId', ParseUUIDPipe) headquarterId: string,
    @Body() updateHeadquarterDto: UpdateHeadquarterDto
  ): Promise<HeadquarterResponse> {
    return this.occupancyService.updateHeadquarter(headquarterId, updateHeadquarterDto);
  }

  @Delete('/headquarter/:headquarterId')
  deleteHeadquarter(@Param('headquarterId', ParseUUIDPipe) headquarterId: string): Promise<HeadquarterResponse> {
    return this.occupancyService.deleteHeadquarter(headquarterId);
  }

  // * Comienzan endpoints para positionHerarchys
  @Post('/positionHierarchies')
  createPositionHierarchy(@Body() createPositionHierarchyDto: CreatePositionHierarchyDto): Promise<PositionHierarchyResponse> {
    return this.occupancyService.createPositionHierarchy(createPositionHierarchyDto);
  }

  @Get('/positionHierarchies/:positionHerarchyId')
  findPositionHerarchy(@Param('positionHerarchyId', ParseUUIDPipe) positionHerarchyId: string) {
    return this.occupancyService.findPositionHerarchy(positionHerarchyId);
  }
  
  @Get('/positionHierarchies/position/:positionId')
  findHierarchiesWithPositionId(@Param('positionId', ParseUUIDPipe) positionId: string) {
    return this.occupancyService.findHierarchiesWithPositionId(positionId);
  }

  @Get('/positionHierarchies')
  findAllPositionsHerarchies(): Promise<PositionHierarchyResponse> {
    return this.occupancyService.findAllPositionHerarchys();
  }

  @Patch('/positionHierarchies/:positionHerarchyId')
  updatePositionHierarchy(
    @Param('positionHerarchyId', ParseUUIDPipe) positionHerarchyId: string,
    @Body() updatePositionHierarchyDto: UpdatePositionHierarchyDto
  ) {
    return this.occupancyService.updatePositionHierarchy(positionHerarchyId, updatePositionHierarchyDto);
  }

  @Delete('/positionHierarchies/:positionHerarchyId')
  deletePositionHierarchy(@Param('positionHerarchyId', ParseUUIDPipe) positionHerarchyId: string) {
    return this.occupancyService.deletePositionHierarchy(positionHerarchyId);
  }
}
