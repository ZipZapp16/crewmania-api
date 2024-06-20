import { StatusValidation } from "@prisma/client";
import { DataResponse } from "src/common/interfaces/data-response.interface";

export interface StatusValidationResponse extends DataResponse {
    data: StatusValidation | StatusValidation[];
}