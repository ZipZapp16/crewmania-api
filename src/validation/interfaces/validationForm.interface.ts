export enum VaidationTypesValues {
    Profile = 'Profile',
    SelfiePhotograph = 'SelfiePhotograph',
    GroupalPhotograph = 'GroupalPhotograph'
}

export type VaidationTypes = VaidationTypesValues.Profile | VaidationTypesValues.SelfiePhotograph | VaidationTypesValues.GroupalPhotograph;

export interface ValidationForm {
    id?: string;
    type: VaidationTypes;
    description: string;
}