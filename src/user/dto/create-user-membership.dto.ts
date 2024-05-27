import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsUUID } from "class-validator";

export class CreateUserMembershipDto {
    @IsUUID()
    membershipId: string;

    @IsUUID()
    userId: string;
}