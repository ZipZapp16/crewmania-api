import { IsOptional, IsString, IsUUID } from "class-validator";

export class CreateUserValidationDto {
    
    @IsOptional()
    @IsString()
    url?: string; 

    @IsUUID()
    validationFormId: string | null;

    @IsUUID()
    userId: string | null;

    @IsUUID()
    statusValidationId: string | null;
}