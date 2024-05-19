import { IsString } from "class-validator";

export class CreateValidationFormDataDto {
    
    @IsString()
    url: string;    
}
