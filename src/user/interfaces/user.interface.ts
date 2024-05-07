import { User } from "@prisma/client";
import { DataResponse } from "src/interfaces/data-response.interface";

export interface UserResponse extends DataResponse {
    data: User | User[];
}
