import { IsString, MinLength } from "class-validator";

export class CreateHierarchyDto {
    @IsString()
    @MinLength(1)
    name: string;
}
