import { Reflector } from '@nestjs/core';
import { BadRequestException, CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from '@prisma/client';
import { META_ROLES } from '../decorators/roleProtected.decorator';

@Injectable()
export class UserRolGuard implements CanActivate {

  constructor(
    private readonly reflector: Reflector
  ) { }

  canActivate(context: ExecutionContext ): boolean | Promise<boolean> | Observable<boolean> {
    const validRoles: string[] = this.reflector.get(META_ROLES, context.getHandler());

    if(!validRoles) return true;
    if(validRoles.length === 0) return true;

    const req = context.switchToHttp().getRequest();
    const user = req.user as User;

    if(!user) {
      throw new BadRequestException("The user doesn't have the privileges.");
    }

    if(validRoles.includes(user.role)) {
      return true;
    }

    throw new ForbiddenException(`User needs to have an elevated role to see the result.`);
  }
}
