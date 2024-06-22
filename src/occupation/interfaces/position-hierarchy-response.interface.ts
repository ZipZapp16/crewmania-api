import { PositionsHerarchy } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface PositionHierarchyResponse extends DataResponse {
    data: PositionsHerarchy | PositionsHerarchy[];
}