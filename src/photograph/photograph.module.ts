import { Module } from '@nestjs/common';
import { PhotographService } from './photograph.service';
import { PhotographController } from './photograph.controller';

@Module({
  controllers: [PhotographController],
  providers: [PhotographService],
})
export class PhotographModule {}
