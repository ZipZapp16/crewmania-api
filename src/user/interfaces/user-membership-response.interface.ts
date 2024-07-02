import { UserMembership } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface UserSubscription { 
    membershipId: string;
    daysToRenew: number;
    type: string;
};
export interface UserMembershipResponse extends DataResponse {
    data: UserMembership | UserMembership[] | UserSubscription | UserSubscription[];
}