import { Offer } from "@prisma/client";
import { DataResponse } from "src/interfaces/data-response.interface";

export interface OfferResponse extends DataResponse {
    data: Offer | Offer[];
}