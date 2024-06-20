import { StatusValidation } from "@prisma/client";
import { DataResponse } from "src/interfaces/data-response.interface";

export interface StatusValidationResponse extends DataResponse {
    data: StatusValidation | StatusValidation[];
}