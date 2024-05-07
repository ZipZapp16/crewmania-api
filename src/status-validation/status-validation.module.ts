import { Module } from '@nestjs/common';
import { StatusValidationService } from './status-validation.service';
import { StatusValidationController } from './status-validation.controller';

@Module({
  controllers: [StatusValidationController],
  providers: [StatusValidationService],
})
export class StatusValidationModule {}
