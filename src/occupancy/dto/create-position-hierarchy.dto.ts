import { IsUUID } from "class-validator";

export class CreatePositionHierarchyDto {

    @IsUUID()
    positionId: string;

    @IsUUID()
    herarchyId: string;
}
