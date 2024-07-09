import { Version } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface VersionResponse extends DataResponse {
    data: Version | Version[];
}