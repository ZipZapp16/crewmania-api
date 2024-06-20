import { Position } from "@prisma/client";
import { DataResponse } from "src/interfaces/data-response.interface";

export interface PositionResponse extends DataResponse {
    data: Position | Position[];
}