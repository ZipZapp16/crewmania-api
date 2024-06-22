import { User } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface UserResponse extends DataResponse {
    data: User | User[];
}
