import { Module } from '@nestjs/common';
import { LogsService } from './logs.service';
import { LogsController } from './logs.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [LogsController],
  providers: [LogsService],
  exports: [LogsService],
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
})
export class LogsModule {}
