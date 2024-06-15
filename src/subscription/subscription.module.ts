import { Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  exports: [SubscriptionService],
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
  imports: [PrismaModule]
})
export class SubscriptionModule {}
