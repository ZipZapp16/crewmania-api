import { Membership, MembershipOffer, Offer } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface MembershipOfferResponse extends DataResponse {
    data: MembershipOffer | MembershipOffer[];
}

interface findMO {
    id: string;
    membership: string | Membership[];
    offer: string | Offer[];
}

export interface FindMembershipOfferResponse extends DataResponse {
    data: findMO | findMO[];
}