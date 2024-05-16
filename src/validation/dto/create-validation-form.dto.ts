import { IsOptional, IsString, MinLength } from "class-validator";

export class CreateValidationFormDto {

    @MinLength(1)
    @IsString()
    type: string;

    @MinLength(1)
    @IsString()
    description: string;
    
    @IsOptional()
    validationFormDataId?: string | null;
}
