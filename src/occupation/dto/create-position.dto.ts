import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreatePositionDto {

    @ApiProperty({ 
        default: 'Piloto', description: 'Name of the position'
    })
    @IsString()
    @MinLength(1)
    name: string;
}
