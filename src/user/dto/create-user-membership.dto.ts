import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class CreateUserMembershipDto {
    @ApiProperty({ 
        default: '65042bc5-ed19-4076-8fd5-b10ae711ef41', description: 'Id which represents the ID field of the membership selected by the user'
    })
    @IsUUID()
    membershipOfferId: string;

    @ApiProperty({ 
        default: '65042bc5-ed19-4076-8fd5-b10ae711ef41', description: 'Id which represents the ID field of the user'
    })
    @IsUUID()
    userId: string;
}