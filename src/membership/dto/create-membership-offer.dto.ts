import { IsOptional, IsUUID, } from "class-validator";

export class CreateMembershipOfferDto {

    @IsUUID()
    membershipId: string;

    @IsOptional()
    @IsUUID()
    offerId?: string | null;
}
