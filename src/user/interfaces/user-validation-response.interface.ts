import { UserValidation } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface UserValidationResponse extends DataResponse {
    data: UserValidation | UserValidation[];
}
