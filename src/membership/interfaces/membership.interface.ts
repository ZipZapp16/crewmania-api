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
    cost: number;
    durationDays: number;
    currency: ValidCurrencies;
    membershipOfferId?: string;
}