import { IsString, MinLength } from "class-validator";

export class CreateLogDto {

    @IsString()
    @MinLength(1)
    description: string;
}
