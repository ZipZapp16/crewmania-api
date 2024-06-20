import { UserMembership } from "@prisma/client";
import { DataResponse } from "src/interfaces/data-response.interface";

export interface UserMembershipResponse extends DataResponse {
    data: UserMembership | UserMembership[];
}
