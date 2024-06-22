import { Hierarchy } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface HierarchyResponse extends DataResponse {
    data: Hierarchy | Hierarchy[];
}