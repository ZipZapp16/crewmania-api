import { Log } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface LogsResponse extends DataResponse {
    data: Log | Log[];
}