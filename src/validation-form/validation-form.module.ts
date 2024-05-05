import { Module } from '@nestjs/common';
import { ValidationFormService } from './validation-form.service';
import { ValidationFormController } from './validation-form.controller';

@Module({
  controllers: [ValidationFormController],
  providers: [ValidationFormService],
})
export class ValidationFormModule {}
