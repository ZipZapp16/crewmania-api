import { Module } from '@nestjs/common';
import { ValidationService } from './validation.service';
import { ValidationController } from './validation.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  exports: [ValidationService],
  controllers: [ValidationController],
  providers: [ValidationService],
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })]
})
export class ValidationModule {}
