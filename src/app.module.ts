import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DefaultModule } from './default/default.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, DefaultModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
