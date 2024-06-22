import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SubscriptionModule } from 'src/subscription/subscription.module';
import { CommonModule } from 'src/common/common.module';


@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule, SubscriptionModule, CommonModule]
})
export class UserModule { }
