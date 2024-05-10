
import { Headquarter } from "src/headquarter/interfaces/headquarter.interface";
import { Hierarchy } from "src/occupancy/interfaces/herarchy.interface";
import { MembershipOffer } from "src/membership/interfaces/membershipOffer.interface";
import { Membership } from "src/membership/interfaces/membership.interface";
import { Position } from "src/occupancy/interfaces/position.interface";
import { statusType, statusValidation } from "src/validation/interfaces/status-validation.interface";
import { VaidationTypesValues, ValidationForm } from "src/validation/interfaces/validationForm.interface";


export const positions: Position[] = [
    {
        id: "f6dd8941-abad-4b07-84ac-344cd6447013",
        name: "Piloto",
        description: "Piloto a cargo del vuelo."
    },
    {
        id: "00c24171-2976-4e48-8544-44ed04c7278c",
        name: "Sobrecargo",
        description: "Encargado de la parte operativa de un avión y de brindar atención a quienes viajan en él"
    }
];

export const Hierarchys: Hierarchy[] = [
    // * Pilotos
    {
        id: "43cd42e5-0aab-487c-84cf-d0557d1f5204",
        name: "Cap.",
        positionId: "f6dd8941-abad-4b07-84ac-344cd6447013",
    },
    {
        id: "3ce7c80d-ee05-4a07-a9fa-ac94bc3ac810",
        name: "P.O.",
        positionId: "f6dd8941-abad-4b07-84ac-344cd6447013",
    },
    // * Sobrecargo
    {
        id: "54fe3592-696e-444d-946f-51b10564ebc4",
        name: "ESB",
        positionId: "00c24171-2976-4e48-8544-44ed04c7278c",
    },
    {
        id: "861c855c-2aa6-4c7c-9d95-dcae81d3a465",
        name: "SOB",
        positionId: "00c24171-2976-4e48-8544-44ed04c7278c",
    }
];

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

export const Headquarters: Headquarter[] = [
    {
        name: "Aereopuerto de la Ciudad de Mexico",
        code: '',
        location: "Ciudad de Mexico"
    }
];

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

export const Memberships: Membership[] = [
    {
        level: "Gratuita",
        type: "Semanal",
        cost: 0,
        currency: "MXN",
        durationDays: 7
    },
    {
        level: "Oro",
        type: "Mensual",
        cost: 199.0,
        currency: "MXN",
        durationDays: 30
    },
    {
        level: "Platino",
        type: "Mensual",
        cost: 299.0,
        currency: "MXN",
        durationDays: 30
    },
    {
        level: "Diamante",
        type: "Mensual",
        cost: 449.0,
        currency: "MXN",
        durationDays: 30
    },
    {
        level: "Oro",
        type: "Semestral",
        cost: 399.0,
        currency: "MXN",
        durationDays: 30
    },
    {
        level: "Platino",
        type: "Semestral",
        cost: 499.0,
        currency: "MXN",
        durationDays: 30
    },
    {
        level: "Diamante",
        type: "Semestral",
        cost: 699.0,
        currency: "MXN",
        durationDays: 30
    },
    {
        level: "Oro",
        type: "Anual",
        cost: 449.0,
        currency: "MXN",
        durationDays: 365
    },
    {
        level: "Platino",
        type: "Anual",
        cost: 699.0,
        currency: "MXN",
        durationDays: 365
    },
    {
        level: "Diamante",
        type: "Anual",
        cost: 999.0,
        currency: "MXN",
        durationDays: 372
    },
    // * Empieza ingles
    {
        level: "Free trial",
        type: "Weekly",
        cost: 0,
        currency: "USD",
        durationDays: 7
    },
    {
        level: "Gold",
        type: "Monthly",
        cost: 9.95,
        currency: "USD",
        durationDays: 30
    },
    {
        level: "Platinum",
        type: "Monthly",
        cost: 14.95,
        currency: "USD",
        durationDays: 30
    },
    {
        level: "Diamond",
        type: "Monthly",
        cost: 22.45,
        currency: "USD",
        durationDays: 30
    },
    {
        level: "Oro",
        type: "Half-yearly",
        cost: 19.95,
        currency: "USD",
        durationDays: 365
    },
    {
        level: "Platinum",
        type: "Half-yearly",
        cost: 24.95,
        currency: "USD",
        durationDays: 365
    },
    {
        level: "Diamante",
        type: "Half-yearly",
        cost: 34.95,
        currency: "USD",
        durationDays: 372
    },
    {
        level: "Oro",
        type: "Anual",
        cost: 22.45,
        currency: "USD",
        durationDays: 365
    },
    {
        level: "Platinum",
        type: "Anual",
        cost: 34.95,
        currency: "USD",
        durationDays: 365
    },
    {
        level: "Diamante",
        type: "Anual",
        cost: 49.95,
        currency: "USD",
        durationDays: 372
    },
];

export const MembershipOffers: MembershipOffer[] = [
    {
        name: "Preventa fase 1 (Lanzamiento)",
        percentageOffer: 80,
        dateStart: new Date('2024-08-10'),
        dateEnd: new Date('2024-10-17'),
        enabled: true
    },
    {
        name: "Preventa fase 2",
        percentageOffer: 65,
        dateStart: new Date('2024-10-18'),
        dateEnd: new Date('2025-01-25'),
        enabled: true
    },
    {
        name: "Preventa fase 3",
        percentageOffer: 50,
        dateStart: new Date('2025-01-26'),
        dateEnd: new Date('2025-05-25'),
        enabled: true
    },
];