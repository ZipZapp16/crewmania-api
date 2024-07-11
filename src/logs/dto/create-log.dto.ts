import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreateLogDto {

    @ApiProperty({ 
        default: 'A new user registered', description: 'Description of the log saved'
    })
    @IsString()
    @MinLength(1)
    description: string;
}
