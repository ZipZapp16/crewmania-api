import { Position } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface PositionResponse extends DataResponse {
    data: Position | Position[];
}