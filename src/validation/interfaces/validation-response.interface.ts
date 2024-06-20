import { ValidationForm } from "@prisma/client";
import { DataResponse } from "src/common/interfaces/data-response.interface";

export interface ValidationResponse extends DataResponse {
    data: ValidationForm | ValidationForm[];
}