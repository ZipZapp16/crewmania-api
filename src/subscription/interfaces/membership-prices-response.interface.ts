import { DataResponse } from "src/common/interfaces";

export interface Prices {
    membershipId: string,
    normalPrice: number,
    discount: number,
    priceWithDiscount: number
}

export interface MembershipPricesResponse extends DataResponse {
    data: Prices | Prices[];
}