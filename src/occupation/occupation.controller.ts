import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OccupationService } from "./occupation.service";
import { CreateHeadquarterDto, CreateHierarchyDto, CreatePositionDto, CreatePositionHierarchyDto, UpdateHeadquarterDto, UpdatePositionDto, UpdatePositionHierarchyDto, UpdateHierarchyDto } from "./dto";
import { HeadquarterResponse, HierarchyResponse, PositionHierarchyResponse, PositionResponse } from "./interfaces";

@ApiTags('Occupation')
@Controller('occupation')
export class OccupancyController {
  constructor(private readonly occupationService: OccupationService) {}

  // * Comienzan endpoitns para positions
  @Post('/positions')
  createPosition(@Body() createPositionDto: CreatePositionDto): Promise<PositionResponse> {
    return this.occupationService.createPosition(createPositionDto);
  }
  
  @Get('/position/:positionId')
  findPosition(@Param('positionId', ParseUUIDPipe) positionId: string): Promise<PositionResponse> {
    return this.occupationService.findPosition(positionId);
  }

  @Get('/positions')
  findAllPositions(): Promise<PositionResponse> {
    return this.occupationService.findAllPositions();
  }

  @Patch('/position/:positionId')
  updatePosition(
    @Param('positionId', ParseUUIDPipe) positionId: string, 
    @Body() updatePositionDto: UpdatePositionDto
  ): Promise<PositionResponse> {
    return this.occupationService.updatePosition(positionId, updatePositionDto);
  }

  @Delete('/position/:positionId')
  deletePosition(@Param('positionId', ParseUUIDPipe) positionId: string): Promise<PositionResponse> {
    return this.occupationService.deletePosition(positionId);
  }

  // * Comienzan endpoitns para hierarchys
  @Post('/hierarchys')
  createHierarchys(@Body() createHierarchyDto: CreateHierarchyDto): Promise<HierarchyResponse> {
    return this.occupationService.createHierarchys(createHierarchyDto);
  }

  @Get('/hierarchy/:hierarchyId')
  findHierarchy(@Param('hierarchyId', ParseUUIDPipe) hierarchyId: string): Promise<HierarchyResponse> {
    return this.occupationService.findHierarchy(hierarchyId);
  }

  @Get('/hierarchys')
  findAllHierarchys(): Promise<HierarchyResponse> {
    return this.occupationService.findAllHierarchys();
  }

  @Patch('/hierarchy/:hierarchyId')
  updateHierarchy(
    @Param('hierarchyId', ParseUUIDPipe) hierarchyId: string,
    @Body() updateHierarchyDto: UpdateHierarchyDto
  ): Promise<HierarchyResponse> {
    return this.occupationService.updateHierarchy(hierarchyId, updateHierarchyDto);
  }

  @Delete('/hierarchy/:hierarchyId')
  deleteHierarchy(
    @Param('hierarchyId', ParseUUIDPipe) hierarchyId: string
  ): Promise<HierarchyResponse> {
    return this.occupationService.deleteHierarchy(hierarchyId);
  }

  // * Comienzan endpoints para headquartes
  @Post('/headquarters')
  creatHeadquarter(@Body() createHeadquarterDto: CreateHeadquarterDto): Promise<HeadquarterResponse> {
    return this.occupationService.createHeadquarter(createHeadquarterDto);
  }

  @Get('/headquarter/:headquarterId')
  findHeadquarter(@Param('headquarterId', ParseUUIDPipe) headquarterId: string): Promise<HeadquarterResponse> {
    return this.occupationService.findHeadquarter(headquarterId);
  }

  @Get('/headquarters')
  findAllHeadquarters(): Promise<HeadquarterResponse> {
    return this.occupationService.findAllHeadquarters();
  }

  @Patch('/headquarter/:headquarterId')
  updateHeadquarter(
    @Param('headquarterId', ParseUUIDPipe) headquarterId: string,
    @Body() updateHeadquarterDto: UpdateHeadquarterDto
  ): Promise<HeadquarterResponse> {
    return this.occupationService.updateHeadquarter(headquarterId, updateHeadquarterDto);
  }

  @Delete('/headquarter/:headquarterId')
  deleteHeadquarter(@Param('headquarterId', ParseUUIDPipe) headquarterId: string): Promise<HeadquarterResponse> {
    return this.occupationService.deleteHeadquarter(headquarterId);
  }

  // * Comienzan endpoints para positionHerarchys
  @Post('/positionHierarchies')
  createPositionHierarchy(@Body() createPositionHierarchyDto: CreatePositionHierarchyDto): Promise<PositionHierarchyResponse> {
    return this.occupationService.createPositionHierarchy(createPositionHierarchyDto);
  }

  @Get('/positionHierarchies/:positionHerarchyId')
  findPositionHerarchy(@Param('positionHerarchyId', ParseUUIDPipe) positionHerarchyId: string) {
    return this.occupationService.findPositionHerarchy(positionHerarchyId);
  }
  
  @Get('/positionHierarchies/position/:positionId')
  findHierarchiesWithPositionId(@Param('positionId', ParseUUIDPipe) positionId: string) {
    return this.occupationService.findHierarchiesWithPositionId(positionId);
  }

  @Get('/positionHierarchies')
  findAllPositionsHerarchies(): Promise<PositionHierarchyResponse> {
    return this.occupationService.findAllPositionHerarchys();
  }

  @Patch('/positionHierarchies/:positionHerarchyId')
  updatePositionHierarchy(
    @Param('positionHerarchyId', ParseUUIDPipe) positionHerarchyId: string,
    @Body() updatePositionHierarchyDto: UpdatePositionHierarchyDto
  ) {
    return this.occupationService.updatePositionHierarchy(positionHerarchyId, updatePositionHierarchyDto);
  }

  @Delete('/positionHierarchies/:positionHerarchyId')
  deletePositionHierarchy(@Param('positionHerarchyId', ParseUUIDPipe) positionHerarchyId: string) {
    return this.occupationService.deletePositionHierarchy(positionHerarchyId);
  }
}
