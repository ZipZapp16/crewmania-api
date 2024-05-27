import { MembershipOffer } from "@prisma/client";
import { DataResponse } from "src/interfaces/data-response.interface";

export interface MembershipOfferResponse extends DataResponse {
    data: MembershipOffer | MembershipOffer[];
}