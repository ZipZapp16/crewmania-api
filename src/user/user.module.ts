import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MembershipModule } from 'src/membership/membership.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule, MembershipModule]
})
export class UserModule { }
