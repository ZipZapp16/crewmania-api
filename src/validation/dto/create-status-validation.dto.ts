import { IsString, MinLength } from "class-validator";

export class CreateStatusValidationDto {

    @IsString()
    @MinLength(1)
    type: string;

    @IsString()
    @MinLength(1)
    reason: string;
}
