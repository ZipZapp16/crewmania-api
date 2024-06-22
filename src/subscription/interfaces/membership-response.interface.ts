import { Membership } from "@prisma/client";
import { DataResponse } from "src/common/interfaces";

export interface MembershipResponse extends DataResponse {
    data: Membership | Membership[];
}