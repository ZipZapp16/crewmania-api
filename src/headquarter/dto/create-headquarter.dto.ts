import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateHeadquarterDto {

    @IsString()
    name: string;

    @IsString()
    city: string;

    @MinLength(1)
    @MaxLength(3)
    @IsString()
    code: string;

    @IsString()
    country: string;

    @IsString()
    state: string;
}