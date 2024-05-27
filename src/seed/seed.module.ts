import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { OccupancyModule } from 'src/occupancy/occupancy.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ValidationModule } from 'src/validation/validation.module';
import { MembershipModule } from 'src/membership/membership.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PrismaModule, OccupancyModule, ValidationModule, MembershipModule]
})
export class SeedModule {}
