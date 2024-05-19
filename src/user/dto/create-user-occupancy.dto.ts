import { IsUUID } from "class-validator";

export class UserOccupancyDto {
    
    @IsUUID()
    headquarterId: string;

    @IsUUID()
    userId: string;

    @IsUUID()
    positionHerarchyId: string;
}