import { Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  exports: [SubscriptionService],
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })]
})
export class SubscriptionModule {}
