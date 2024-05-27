import { Headquarter } from "@prisma/client";
import { DataResponse } from "src/interfaces/data-response.interface";

export interface HeadquarterResponse extends DataResponse {
    data: Headquarter | Headquarter[];
}