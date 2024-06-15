import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SubscriptionModule } from 'src/subscription/subscription.module';


@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule, SubscriptionModule]
})
export class UserModule { }
