import { Module } from '@nestjs/common';
import { OccupancyService } from './occupancy.service';
import { OccupancyController } from './occupancy.controller';

@Module({
  controllers: [OccupancyController],
  providers: [OccupancyService],
})
export class OccupancyModule {}
