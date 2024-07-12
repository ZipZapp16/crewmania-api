import { Module } from '@nestjs/common';
import { VersionService } from './version.service';
import { VersionController } from './version.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [VersionController],
  providers: [VersionService],
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })]
})
export class VersionModule {}
