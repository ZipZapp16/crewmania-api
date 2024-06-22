import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class CreatePositionHierarchyDto {

    @ApiProperty({ 
        default: '590bf97d-71e8-4891-8a03-dc5f1336188d', description: 'ID which represents the Id field in the database of the position'
    })
    @IsUUID()
    positionId: string;

    @ApiProperty({ 
        default: '590bf97d-71e8-4891-8a03-dc5f1336188d', description: 'ID which represents the Id field in the database of the hierarchy'
    })
    @IsUUID()
    hierarchyId: string;
}
