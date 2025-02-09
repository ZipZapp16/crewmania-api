import { applyDecorators, UseGuards } from '@nestjs/common';
import { ValidRoles } from '../interfaces';
import { RoleProtected } from './roleProtected.decorator';
import { AuthGuard } from '@nestjs/passport';
import { UserRolGuard } from '../guards/user-rol.guard';

export function Auth(...roles: ValidRoles[]) {
  return applyDecorators(
    RoleProtected(...roles),
    UseGuards(AuthGuard(), UserRolGuard)
  );
}