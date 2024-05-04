import { Controller, Get } from '@nestjs/common';
import { DefaultService } from './default.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Default')
@Controller()
export class DefaultController {
  constructor(private readonly defaultService: DefaultService) {}

  @Get()
  getCrewmaniaStart() {
    return this.defaultService.getCrewmaniaStart();
  }
}
