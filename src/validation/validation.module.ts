import { Module } from '@nestjs/common';
import { ValidationService } from './validation.service';
import { ValidationController } from './validation.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  exports: [ValidationService],
  controllers: [ValidationController],
  providers: [ValidationService],
  imports: [PrismaModule]
})
export class ValidationModule {}
