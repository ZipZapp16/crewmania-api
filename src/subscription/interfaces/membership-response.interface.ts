import { Membership } from "@prisma/client";
import { DataResponse } from "src/common/interfaces/data-response.interface";

export interface MembershipResponse extends DataResponse {
    data: Membership | Membership[];
}