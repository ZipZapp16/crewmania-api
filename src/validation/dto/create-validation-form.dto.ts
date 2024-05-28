import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, MinLength } from "class-validator";

export class CreateValidationFormDto {

    @ApiProperty({ 
        default: 'Profile', description: "Name of the validation form"
    })
    @MinLength(1)
    @IsString()
    type: string;

    @ApiProperty({ 
        default: 'Los perfiles de 2 usuarios que lo validan mediante la lectura de sus códigos QR.', description: "Description of the validation form"
    })
    @MinLength(1)
    @IsString()
    description: string;
    
    @ApiProperty({ 
        default: '7c1e4740-2bb3-4e0a-a7bb-0ace6efa0809', description: "Id which represents the ID of the validation form selected by the user.",
        nullable: true
    })
    @IsOptional()
    validationFormDataId?: string | null;
}
