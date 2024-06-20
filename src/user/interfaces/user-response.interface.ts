import { User } from "@prisma/client";
import { DataResponse } from "src/common/interfaces/data-response.interface";

export interface UserResponse extends DataResponse {
    data: User | User[];
}
