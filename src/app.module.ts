import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DefaultModule } from './default/default.module';
import { UserModule } from './user/user.module';
import { SeedModule } from './seed/seed.module';
import { HeadquarterModule } from './headquarter/headquarter.module';
import { MembershipModule } from './membership/membership.module';
import { OccupancyModule } from './occupancy/occupancy.module';
import { ValidationModule } from './validation/validation.module';

@Module({
  imports: [AuthModule, DefaultModule, UserModule, SeedModule, HeadquarterModule, MembershipModule, OccupancyModule, ValidationModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
