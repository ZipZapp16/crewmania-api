import { User } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface UserWithToken extends User {
    token?: string;
}

export interface UserResponse extends DataResponse {
    data: UserWithToken | UserWithToken[];
}
