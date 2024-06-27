import { Module } from '@nestjs/common';
import { OccupationService } from './occupation.service';
import { OccupancyController } from './occupation.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [OccupancyController],
  providers: [OccupationService],
  imports: [PrismaModule],
  exports: [OccupationService]
})
export class OccupancyModule {}
