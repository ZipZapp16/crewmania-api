import { Module } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { MembershipController } from './membership.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MembershipController],
  providers: [MembershipService],
  imports: [PrismaModule]
})
export class MembershipModule {}
