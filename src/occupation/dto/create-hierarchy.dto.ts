import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreateHierarchyDto {
    @ApiProperty({ 
        default: 'Cap.', description: 'Name of the hierarchy'
    })
    @IsString()
    @MinLength(1)
    name: string;
}
