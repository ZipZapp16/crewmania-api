import { Offer } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface OfferResponse extends DataResponse {
    data: Offer | Offer[];
}