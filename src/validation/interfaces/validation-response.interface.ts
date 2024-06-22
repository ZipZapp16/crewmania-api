import { ValidationForm } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface ValidationResponse extends DataResponse {
    data: ValidationForm | ValidationForm[];
}