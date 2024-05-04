import { message, status } from "src/types/data-response.types";

export interface DataResponse {
    status: status;
    message: message;
}