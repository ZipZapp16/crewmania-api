import { UserOccupancy } from "@prisma/client";
import { DataResponse } from "src/common/interfaces/data-response.interface";

export interface UserOccupancyResponse extends DataResponse {
    data: UserOccupancy | UserOccupancy[];
}
