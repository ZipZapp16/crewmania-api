interface seedData {
    positions: Position[];
    hierarchies: Hierarchy[];
    headquarters: Headquarter[];
    validationForm: ValidationForm[];
    statusValidation: statusValidation[];
    memberships: Membership[];
    membershipOffer: Offer[];
}

export interface Position {
    name: string;
}

export const positions: Position[] = [
    {
        name: "Piloto",
    },
    {
        name: "Sobrecargo",
    }
];

export interface Hierarchy {
    name: string;
}

export const Hierarchys: Hierarchy[] = [
    // * Pilotos
    {
        name: "Cap.",
    },
    {
        name: "P.O."
    },
    // * Sobrecargo
    {
        name: "ESB"
    },
    {
        name: "SOB"
    }
];

export interface Headquarter {
    name: string;
    code: string;
    country: string;
    state: string;
    city: string;
}

export const Headquarters: Headquarter[] = [
    {
        name: "Aereopuerto de la Ciudad de Mexico",
        code: "MEX",
        country: "Mexico",
        state: "Mexico",
        city: "Ciudad de Mexico"
    },
    {
        name: "Aeropuerto de Lieja",
        code: "LGG",
        country: "Bélgica",
        state: "Región Valona",
        city: "Lieja"
    },
    {
        name: "Aeropuerto de Lanzarote César Manrique",
        code: "ACE",
        country: "España",
        state: "Islas Canarias",
        city: "Lanzarote"
    },
    {
        name: "Aeroparque Jorge Newbery",
        code: "AEP",
        country: "Argentina",
        state: "Buenos Aires",
        city: "Buenos Aires"
    },
    {
        name: "Aeropuerto de Ámsterdam-Schiphol",
        code: "AMS",
        country: "Países Bajos",
        state: "Holanda Septentrional",
        city: "Ámsterdam"
    }
];

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

export const ValidationForms: ValidationForm[] = [
    {
        type: VaidationTypesValues.Profile,
        description: "Los perfiles de 2 usuarios que lo validan mediante la lectura de sus códigos QR.",
    },
    {
        type: VaidationTypesValues.SelfiePhotograph,
        description: "Fotografía tipo selfie en uniforme.",
    },
    {
        type: VaidationTypesValues.GroupalPhotograph,
        description: "Fotografía de validación en la que salga con cuando menos otros 2 de sus colegas en el ambiente de trabajo",
    },
];

export enum statusType {
    InProcess = 'En curso',
    success = 'Success',
    declined = 'Declined'
}

export interface statusValidation {
    type: statusType;
    reason: string;
}

export const StatusValidation: statusValidation[] = [
    {
        type: statusType.InProcess,
        reason: "La validacion se encuentra en proceso, por favor, matente atento a tu correo electronico para recibir actualizaciones."
    },
    {
        type: statusType.declined,
        reason: "No congruencia entre lo indicado en el formulario de registro y sus demás medios de verificación."
    },
    {
        type: statusType.declined,
        reason: "Medio de verificación falso."
    },
    {
        type: statusType.declined,
        reason: "No hay congruencia entre fotografía tipo selfie y fotografía de validación."
    },
    {
        type: statusType.declined,
        reason: "No se encuentra en el ambiente de trabajo en la fotografía de validación."
    },
    {
        type: statusType.success,
        reason: "Tu cuenta se ha verificado exitosamente"
    },
];

// * Spanish
type ValidLvlSusciptionsSP = 'Gratuita' | 'Oro' | 'Platino' | 'Diamante';
type ValidDurationSuscriptionsSP = 'Semanal' | 'Mensual' | 'Semestral' | 'Anual';

// * English
type ValidLevelSusciptionsEN = 'Free trial' | 'Gold' | 'Platinum' | 'Diamond';
type ValidDurationSuscriptionsEN = 'Weekly' | 'Monthly' | 'Half-yearly' | 'Anual';

type ValidCurrencies = 'MXN' | 'USD';

export interface Membership {
    id?: string;
    level: ValidLvlSusciptionsSP | ValidLevelSusciptionsEN;
    type: ValidDurationSuscriptionsSP | ValidDurationSuscriptionsEN;
    cost: string;
    durationDays: number;
    currency: ValidCurrencies;
    membershipOfferId?: string;
}

export const Memberships: Membership[] = [
    {
        level: "Gratuita",
        type: "Semanal",
        cost: "0",
        currency: "MXN",
        durationDays: 7
    },
    {
        level: "Oro",
        type: "Mensual",
        cost: "199.0",
        currency: "MXN",
        durationDays: 30
    },
    {
        level: "Platino",
        type: "Mensual",
        cost: "299.0",
        currency: "MXN",
        durationDays: 30
    },
    {
        level: "Diamante",
        type: "Mensual",
        cost: "449.0",
        currency: "MXN",
        durationDays: 30
    },
    {
        level: "Oro",
        type: "Semestral",
        cost: "399.0",
        currency: "MXN",
        durationDays: 180
    },
    {
        level: "Platino",
        type: "Semestral",
        cost: "499.0",
        currency: "MXN",
        durationDays: 180
    },
    {
        level: "Diamante",
        type: "Semestral",
        cost: "699.0",
        currency: "MXN",
        durationDays: 180
    },
    {
        level: "Oro",
        type: "Anual",
        cost: "449.0",
        currency: "MXN",
        durationDays: 365
    },
    {
        level: "Platino",
        type: "Anual",
        cost: "699.0",
        currency: "MXN",
        durationDays: 365
    },
    {
        level: "Diamante",
        type: "Anual",
        cost: "999.0",
        currency: "MXN",
        durationDays: 365
    },
    // * Empieza ingles
    {
        level: "Free trial",
        type: "Weekly",
        cost: "0",
        currency: "USD",
        durationDays: 7
    },
    {
        level: "Gold",
        type: "Monthly",
        cost: "9.95",
        currency: "USD",
        durationDays: 30
    },
    {
        level: "Platinum",
        type: "Monthly",
        cost: "14.95",
        currency: "USD",
        durationDays: 30
    },
    {
        level: "Diamond",
        type: "Monthly",
        cost: "22.45",
        currency: "USD",
        durationDays: 30
    },
    {
        level: "Oro",
        type: "Half-yearly",
        cost: "19.95",
        currency: "USD",
        durationDays: 180
    },
    {
        level: "Platinum",
        type: "Half-yearly",
        cost: "24.95",
        currency: "USD",
        durationDays: 180
    },
    {
        level: "Diamond",
        type: "Half-yearly",
        cost: "34.95",
        currency: "USD",
        durationDays: 180
    },
    {
        level: "Oro",
        type: "Anual",
        cost: "22.45",
        currency: "USD",
        durationDays: 365
    },
    {
        level: "Platinum",
        type: "Anual",
        cost: "34.95",
        currency: "USD",
        durationDays: 365
    },
    {
        level: "Diamond",
        type: "Anual",
        cost: "49.95",
        currency: "USD",
        durationDays: 365
    },
];

export interface Offer {
    name: string;
    percentageOffer: number;
    startDate: Date;
    endDate: Date;
    enabled: boolean;
}

export const Offers: Offer[] = [
    {
        name: "Preventa fase 1 (Lanzamiento)",
        percentageOffer: 80,
        startDate: new Date('2024-08-10'),
        endDate: new Date('2024-10-17'),
        enabled: true
    },
    {
        name: "Preventa fase 2",
        percentageOffer: 65,
        startDate: new Date('2024-10-18'),
        endDate: new Date('2025-01-25'),
        enabled: true
    },
    {
        name: "Preventa fase 3",
        percentageOffer: 50,
        startDate: new Date('2025-01-26'),
        endDate: new Date('2025-05-25'),
        enabled: true
    },
];

export const initialData: seedData = {
    positions,
    hierarchies: Hierarchys,
    headquarters:Headquarters,
    validationForm: ValidationForms,
    statusValidation: StatusValidation,
    memberships: Memberships,
    membershipOffer: Offers
}