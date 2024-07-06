import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DefaultModule } from './default/default.module';
import { UserModule } from './user/user.module';
import { SeedModule } from './seed/seed.module';
import { OccupationModule } from './occupation/occupation.module';
import { ValidationModule } from './validation/validation.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { VersionModule } from './version/version.module';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [AuthModule, DefaultModule, UserModule, SeedModule, SubscriptionModule, OccupationModule, ValidationModule, VersionModule, LogsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
