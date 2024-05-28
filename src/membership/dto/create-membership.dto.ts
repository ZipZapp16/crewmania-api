import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import { IsDecimal, IsNumber, IsOptional, IsString, IsUUID, MinLength } from "class-validator";


export class CreateMembershipDto {

    @ApiProperty({ 
        default: 'Oro', description: 'Level of the membership'
    })
    @MinLength(1)
    @IsString()
    level: string;

    @ApiProperty({ 
        default: 'Anual', description: 'Duration of the membership'
    })
    @MinLength(1)
    @IsString()
    type: string;

    @ApiProperty({ 
        default: '499.0', description: "Membership's price by the level selected"
    })
    @IsDecimal()
    cost: number;

    @ApiProperty({ 
        default: 'MXN', description: "Currency local"
    })
    @MinLength(1)
    @IsString()
    currency: string;

    @ApiProperty({ 
        default: 'Anual', description: 'Duration of the membership on days'
    })
    @IsNumber()
    durationDays: number;

    @ApiProperty({ 
        default: '6775a4b9-64bb-44c9-bac8-1b6a1dc9ebf7', description: 'Offer id, if this exist',
        nullable: true
    })
    @IsOptional()
    membershipOffersId?: string | null;
}
