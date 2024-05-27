import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsNumber, IsString, MinLength } from "class-validator";

export class CreateMembershipOfferDto {

    @MinLength(1)
    @IsString()
    name: string;

    @IsNumber()
    @Type(() => Number)
    percentageOffer: number;

    @IsDate()
    @Type(() => Date)
    dateStart: Date;

    @IsDate()
    @Type(() => Date)
    dateEnd: Date;

    @IsBoolean()
    enabled: boolean;
}
