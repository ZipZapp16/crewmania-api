import { UserMembership } from "@prisma/client";
import { DataResponse } from "src/common/interfaces/data-response.interface";

export interface UserMembershipResponse extends DataResponse {
    data: UserMembership | UserMembership[];
}
