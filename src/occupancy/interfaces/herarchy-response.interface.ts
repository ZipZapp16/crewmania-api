import { Hierarchy } from "@prisma/client";
import { DataResponse } from "src/interfaces/data-response.interface";

export interface HierarchyResponse extends DataResponse {
    data: Hierarchy | Hierarchy[];
}