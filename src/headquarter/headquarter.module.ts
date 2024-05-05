import { Module } from '@nestjs/common';
import { HeadquarterService } from './headquarter.service';
import { HeadquarterController } from './headquarter.controller';

@Module({
  controllers: [HeadquarterController],
  providers: [HeadquarterService],
})
export class HeadquarterModule {}
