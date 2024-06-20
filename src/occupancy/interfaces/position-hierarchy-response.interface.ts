import { PositionsHerarchy } from "@prisma/client";
import { DataResponse } from "src/common/interfaces/data-response.interface";

export interface PositionHierarchyResponse extends DataResponse {
    data: PositionsHerarchy | PositionsHerarchy[];
}