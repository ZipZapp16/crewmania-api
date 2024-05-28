import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsNumber, IsString, MinLength } from "class-validator";

export class CreateOfferDto {

    @ApiProperty({ 
        default: 'Gratuita', description: 'Offer name'
    })
    @MinLength(1)
    @IsString()
    name: string;

    @ApiProperty({ 
        default: 60.0, description: 'Offer percentage'
    })
    @IsNumber()
    @Type(() => Number)
    percentageOffer: number;

    @ApiProperty({ 
        default: "2024-03-18 00:00:00", description: 'Offer start date'
    })
    @IsDate()
    @Type(() => Date)
    startDate: Date;

    @ApiProperty({ 
        default: "2024-04-18 00:00:00", description: 'Offer end date'
    })
    @IsDate()
    @Type(() => Date)
    endDate: Date;

    @ApiProperty({ 
        default: true, description: 'Validates if the offer is avaliable'
    })
    @IsBoolean()
    enabled: boolean;
}
