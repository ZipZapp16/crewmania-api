import { UserValidation } from "@prisma/client";
import { DataResponse } from "src/interfaces/data-response.interface";

export interface UserValidationResponse extends DataResponse {
    data: UserValidation | UserValidation[];
}
