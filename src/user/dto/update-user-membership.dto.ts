import { PartialType } from '@nestjs/swagger';
import { CreateUserMembershipDto } from './create-user-membership.dto';

export class UpdateUserMembershipDto extends PartialType(CreateUserMembershipDto) {}
