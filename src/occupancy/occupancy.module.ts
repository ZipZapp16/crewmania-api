import { Module } from '@nestjs/common';
import { OccupancyService } from './occupancy.service';
import { OccupancyController } from './occupancy.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [OccupancyController],
  providers: [OccupancyService],
  imports: [PrismaModule]
})
export class OccupancyModule {}
