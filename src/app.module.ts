import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DefaultModule } from './default/default.module';
import { UserModule } from './user/user.module';
import { SeedModule } from './seed/seed.module';
import { OccupancyModule } from './occupancy/occupancy.module';
import { ValidationModule } from './validation/validation.module';
import { SubscriptionModule } from './subscription/subscription.module';

@Module({
  imports: [AuthModule, DefaultModule, UserModule, SeedModule, SubscriptionModule, OccupancyModule, ValidationModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
