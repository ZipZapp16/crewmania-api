import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { OccupationModule } from 'src/occupation/occupation.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ValidationModule } from 'src/validation/validation.module';
import { SubscriptionModule } from 'src/subscription/subscription.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PrismaModule, OccupationModule, ValidationModule, SubscriptionModule, PassportModule.register({ defaultStrategy: 'jwt' })]
})
export class SeedModule {}
