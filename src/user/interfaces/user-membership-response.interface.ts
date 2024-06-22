import { UserMembership } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface UserMembershipResponse extends DataResponse {
    data: UserMembership | UserMembership[];
}
