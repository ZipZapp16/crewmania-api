import { UserOccupancy } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface UserOccupancyResponse extends DataResponse {
    data: UserOccupancy | UserOccupancy[];
}
