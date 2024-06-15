import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { OccupancyModule } from 'src/occupancy/occupancy.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ValidationModule } from 'src/validation/validation.module';
import { SubscriptionModule } from 'src/subscription/subscription.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PrismaModule, OccupancyModule, ValidationModule, SubscriptionModule]
})
export class SeedModule {}
