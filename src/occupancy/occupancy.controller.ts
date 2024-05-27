import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OccupancyService } from "./occupancy.service";
import { CreateHeadquarterDto, CreateHierarchyDto, CreatePositionDto, CreatePositionHierarchyDto } from "./dto";
import { HeadquarterResponse, HierarchyResponse, PositionHierarchyResponse, PositionResponse } from "./interfaces";

@ApiTags('Occupancy')
@Controller('occupancy')
export class OccupancyController {
  constructor(private readonly occupancyService: OccupancyService) {}

  // * Comienzan endpoitns para positions
  @Post('/positions')
  createPosition(@Body() createPositionDto: CreatePositionDto): Promise<PositionResponse> {
    return this.occupancyService.createPosition(createPositionDto);
  }

  @Get('/positions')
  findAllPositions(): Promise<PositionResponse> {
    return this.occupancyService.findAllPositions();
  }

  // * Comienzan endpoitns para hierarchys
  @Post('/hierarchys')
  createHierarchys(@Body() createHierarchyDto: CreateHierarchyDto): Promise<HierarchyResponse> {
    return this.occupancyService.createHierarchys(createHierarchyDto);
  }

  @Get('/hierarchys')
  findAllHierarchys(): Promise<HierarchyResponse> {
    return this.occupancyService.findAllHierarchys();
  }

  // * Comienzan endpoints para headquartes
  @Post('/headquartes')
  creatHeadquarter(@Body() createHeadquarterDto: CreateHeadquarterDto): Promise<HeadquarterResponse> {
    return this.occupancyService.creatHeadquarter(createHeadquarterDto);
  }

  @Get('/headquartes')
  findAllHeadquarters(): Promise<HeadquarterResponse> {
    return this.occupancyService.findAllHeadquarters();
  }

  // * Comienzan endpoints para positionHerarchys
  @Post('/positionHerarchys')
  createPositionHierarchy(@Body() createPositionHierarchyDto: CreatePositionHierarchyDto): Promise<PositionHierarchyResponse> {
    return this.occupancyService.createPositionHierarchy(createPositionHierarchyDto);
  }

  @Get('/positionHerarchys')
  findAllPositionsHerarchys(): Promise<PositionHierarchyResponse> {
    return this.occupancyService.findAllPositionHerarchys();
  }
}
