import { Module } from '@nestjs/common';
import { OccupancyService } from './occupation.service';
import { OccupancyController } from './occupation.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [OccupancyController],
  providers: [OccupancyService],
  imports: [PrismaModule],
  exports: [OccupancyService]
})
export class OccupancyModule {}
