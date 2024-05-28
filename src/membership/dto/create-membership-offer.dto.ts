import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsUUID, } from "class-validator";

export class CreateMembershipOfferDto {

    @ApiProperty({ 
        default: '6775a4b9-64bb-44c9-bac8-1b6a1dc9ebf7', description: 'Id of the membership'
    })
    @IsUUID()
    membershipId: string;

    @ApiProperty({ 
        default: '6775a4b9-64bb-44c9-bac8-1b6a1dc9ebf7', description: 'Id of the offer'
    })
    @IsOptional()
    @IsUUID()
    offerId?: string | null;
}
