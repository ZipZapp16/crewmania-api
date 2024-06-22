import { UserValidation } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface ImageValidationUploadResponse extends DataResponse {
    data: UserValidation;
}