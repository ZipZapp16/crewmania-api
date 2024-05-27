import { IsUUID } from "class-validator";

export class CreateUserOccupancyDto {
    
    @IsUUID()
    headquarterId: string;

    @IsUUID()
    userId: string;

    @IsUUID()
    positionHerarchyId: string;
}