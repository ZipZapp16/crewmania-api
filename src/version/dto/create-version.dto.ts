import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreateVersionDto {
    
    @ApiProperty({ 
        default: '1.0.0', description: 'Number of the version that is available to the type of platform'
    })
    @IsString()
    number: string;

    @ApiProperty({ 
        default: 'Operations start', description: 'Description of the number version saved'
    })
    @IsString()
    @MinLength(1)
    description: string;
}
