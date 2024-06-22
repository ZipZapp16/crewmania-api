import { UserValidation } from "@prisma/client";
import { DataResponse } from "src/common/interfaces/data-response.interface";

export interface ImageValidationUploadResponse extends DataResponse {
    data: UserValidation;
}