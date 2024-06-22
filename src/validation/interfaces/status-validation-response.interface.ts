import { StatusValidation } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface StatusValidationResponse extends DataResponse {
    data: StatusValidation | StatusValidation[];
}