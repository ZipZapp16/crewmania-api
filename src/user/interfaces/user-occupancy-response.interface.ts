import { UserOccupancy } from "@prisma/client";
import { DataResponse } from "src/interfaces/data-response.interface";

export interface UserOccupancyResponse extends DataResponse {
    data: UserOccupancy | UserOccupancy[];
}
