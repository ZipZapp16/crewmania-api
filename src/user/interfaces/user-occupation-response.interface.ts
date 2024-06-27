import { UserOccupation  } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface UserOccupationResponse extends DataResponse {
    data: UserOccupation | UserOccupation[];
}
