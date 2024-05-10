export interface MembershipOffer {
    id?: string;
    name: string;
    percentageOffer: number;
    dateStart: Date;
    dateEnd: Date;
    enabled: boolean;
}