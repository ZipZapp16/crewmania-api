import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { OccupationService } from "./occupation.service";
import { CreateHeadquarterDto, CreateHierarchyDto, CreatePositionDto, CreatePositionHierarchyDto, UpdateHeadquarterDto, UpdatePositionDto, UpdatePositionHierarchyDto, UpdateHierarchyDto } from "./dto";
import { HeadquarterResponse, HierarchyResponse, PositionHierarchyResponse, PositionResponse } from "./interfaces";
import { Auth } from "src/auth/decorators";
import { ValidRoles } from "src/auth/interfaces";

@ApiTags('Occupation')
@ApiBearerAuth()
@Controller('occupation')
export class OccupationController {
  constructor(private readonly occupationService: OccupationService) {}

  // * Comienzan endpoitns para positions
  @Post('/positions')
  @Auth(ValidRoles.admin)
  createPosition(@Body() createPositionDto: CreatePositionDto): Promise<PositionResponse> {
    return this.occupationService.createPosition(createPositionDto);
  }
  
  @Get('/position/:positionId')
  @Auth(ValidRoles.admin, ValidRoles.user)
  findPosition(@Param('positionId', ParseUUIDPipe) positionId: string): Promise<PositionResponse> {
    return this.occupationService.findPosition(positionId);
  }

  @Get('/positions')
  @Auth(ValidRoles.admin, ValidRoles.user)
  findAllPositions(): Promise<PositionResponse> {
    return this.occupationService.findAllPositions();
  }

  @Patch('/position/:positionId')
  @Auth(ValidRoles.admin)
  updatePosition(
    @Param('positionId', ParseUUIDPipe) positionId: string, 
    @Body() updatePositionDto: UpdatePositionDto
  ): Promise<PositionResponse> {
    return this.occupationService.updatePosition(positionId, updatePositionDto);
  }

  @Delete('/position/:positionId')
  @Auth(ValidRoles.admin)
  deletePosition(@Param('positionId', ParseUUIDPipe) positionId: string): Promise<PositionResponse> {
    return this.occupationService.deletePosition(positionId);
  }

  // * Comienzan endpoitns para hierarchys
  @Post('/hierarchys')
  @Auth(ValidRoles.admin)
  createHierarchys(@Body() createHierarchyDto: CreateHierarchyDto): Promise<HierarchyResponse> {
    return this.occupationService.createHierarchys(createHierarchyDto);
  }

  @Get('/hierarchy/:hierarchyId')
  @Auth(ValidRoles.admin, ValidRoles.user)
  findHierarchy(@Param('hierarchyId', ParseUUIDPipe) hierarchyId: string): Promise<HierarchyResponse> {
    return this.occupationService.findHierarchy(hierarchyId);
  }

  @Get('/hierarchys')
  @Auth(ValidRoles.admin, ValidRoles.user)
  findAllHierarchys(): Promise<HierarchyResponse> {
    return this.occupationService.findAllHierarchys();
  }

  @Patch('/hierarchy/:hierarchyId')
  @Auth(ValidRoles.admin)
  updateHierarchy(
    @Param('hierarchyId', ParseUUIDPipe) hierarchyId: string,
    @Body() updateHierarchyDto: UpdateHierarchyDto
  ): Promise<HierarchyResponse> {
    return this.occupationService.updateHierarchy(hierarchyId, updateHierarchyDto);
  }

  @Delete('/hierarchy/:hierarchyId')
  @Auth(ValidRoles.admin)
  deleteHierarchy(
    @Param('hierarchyId', ParseUUIDPipe) hierarchyId: string
  ): Promise<HierarchyResponse> {
    return this.occupationService.deleteHierarchy(hierarchyId);
  }

  // * Comienzan endpoints para headquartes
  @Post('/headquarters')
  @Auth(ValidRoles.admin)
  creatHeadquarter(@Body() createHeadquarterDto: CreateHeadquarterDto): Promise<HeadquarterResponse> {
    return this.occupationService.createHeadquarter(createHeadquarterDto);
  }

  @Get('/headquarter/:headquarterId')
  @Auth(ValidRoles.admin, ValidRoles.user)
  findHeadquarter(@Param('headquarterId', ParseUUIDPipe) headquarterId: string): Promise<HeadquarterResponse> {
    return this.occupationService.findHeadquarter(headquarterId);
  }

  @Get('/headquarters')
  @Auth(ValidRoles.admin, ValidRoles.user)
  findAllHeadquarters(): Promise<HeadquarterResponse> {
    return this.occupationService.findAllHeadquarters();
  }

  @Patch('/headquarter/:headquarterId')
  @Auth(ValidRoles.admin)
  updateHeadquarter(
    @Param('headquarterId', ParseUUIDPipe) headquarterId: string,
    @Body() updateHeadquarterDto: UpdateHeadquarterDto
  ): Promise<HeadquarterResponse> {
    return this.occupationService.updateHeadquarter(headquarterId, updateHeadquarterDto);
  }

  @Delete('/headquarter/:headquarterId')
  @Auth(ValidRoles.admin)
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
