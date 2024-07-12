import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SubscriptionModule } from 'src/subscription/subscription.module';
import { CommonModule } from 'src/common/common.module';
import { PassportModule } from '@nestjs/passport';


@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule, SubscriptionModule, CommonModule, PassportModule.register({ defaultStrategy: 'jwt' })]
})
export class UserModule { }
