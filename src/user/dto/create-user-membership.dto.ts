import { IsUUID } from "class-validator";

export class CreateUserMembershipDto {
    @IsUUID()
    membershipOfferId: string;

    @IsUUID()
    userId: string;
}