import { Membership } from "@prisma/client";
import { DataResponse } from "src/interfaces/data-response.interface";

export interface MembershipResponse extends DataResponse {
    data: Membership | Membership[];
}