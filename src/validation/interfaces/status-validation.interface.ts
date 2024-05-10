export enum statusType {
    InProcess = 'En curso',
    success = 'Success',
    declined = 'Declined'
}

export interface statusValidation {
    type: statusType;
    reason: string;
}