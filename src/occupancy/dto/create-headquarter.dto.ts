import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateHeadquarterDto {

    @ApiProperty({ 
        default: 'Aereopuerto de la Ciudad de Mexico', description: 'Name of the headquarter'
    })
    @IsString()
    name: string;

    @ApiProperty({ 
        default: 'Ciudad de Mexico', description: 'City of the headquarter'
    })
    @IsString()
    city: string;

    @ApiProperty({ 
        default: 'MEX', description: 'Code of the headquarter'
    })
    @MinLength(1)
    @MaxLength(3)
    @IsString()
    code: string;

    @ApiProperty({ 
        default: 'Mexico', description: 'Country of the headquarter'
    })
    @IsString()
    country: string;

    @ApiProperty({ 
        default: 'Mexico', description: 'Sate of the headquarter'
    })
    @IsString()
    state: string;
}