import { Module } from '@nestjs/common';
import { OccupationService } from './occupation.service';
import { OccupationController } from './occupation.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [OccupationController],
  providers: [OccupationService],
  imports: [PrismaModule],
  exports: [OccupationService]
})
export class OccupationModule {}
