import { IsString, MinLength } from "class-validator";

export class CreateVersionDto {
    
    @IsString()
    number: string;

    @IsString()
    @MinLength(1)
    description: string;
}
