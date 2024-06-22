import { Headquarter } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface HeadquarterResponse extends DataResponse {
    data: Headquarter | Headquarter[];
}