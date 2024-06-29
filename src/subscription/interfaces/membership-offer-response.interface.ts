import { MembershipOffer, Offer } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface MembershipOfferResponse extends DataResponse {
    data: MembershipOffer | MembershipOffer[];
}
export interface FindMembershipOfferResponse extends DataResponse {
    data: Offer | Offer[];
}