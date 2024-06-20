import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsUUID } from "class-validator";

export class CreateUserValidationDto {
    
    @ApiProperty({ 
        default: '', description: 'Url of the resource selected by the user',
        nullable: true
    })
    @IsOptional()
    @IsString()
    url?: string; 

    @ApiProperty({ 
        default: '65042bc5-ed19-4076-8fd5-b10ae711ef41', description: 'Id which represents the ID field of the validation form selected by the user'
    })
    @IsUUID()
    validationFormId: string | null;

    @ApiProperty({ 
        default: '65042bc5-ed19-4076-8fd5-b10ae711ef41', description: 'Id which represents the ID field of the user'
    })
    @IsUUID()
    userId: string | null;

    @ApiProperty({ 
        default: '65042bc5-ed19-4076-8fd5-b10ae711ef41', description: 'Id which represents the ID field of the status of the validation selected by the user'
    })
    @IsUUID()
    @IsOptional()
    statusValidationId: string | null;
}