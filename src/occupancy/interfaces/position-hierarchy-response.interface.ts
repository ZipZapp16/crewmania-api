import { PositionsHerarchy } from "@prisma/client";
import { DataResponse } from "src/interfaces/data-response.interface";

export interface PositionHierarchyResponse extends DataResponse {
    data: PositionsHerarchy | PositionsHerarchy[];
}