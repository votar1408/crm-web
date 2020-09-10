export enum AlertBoxType {
    success = 'success',
    warning = 'warning',
    error = 'error'
}

export type ValidateTextFieldRule = 'base' | 'moreZero' | 'onlyInt' | 'productName';

export type CurrencyType = 'HC' | 'MC';
export interface AlertData {
    title: string;
    type?: AlertBoxType;
}

export type CortegeData = [string, string];

export interface CookieData {
    playerId: string;
}

export interface HookCookieData extends CookieData {
    saveCookie: (data: CookieData) => void;
    removeCookie: () => void;
}

export interface HookCookieFunc {
    (): HookCookieData;
}

export interface PlayersLocationState {
    notFoundPlayer: boolean;
}

export interface ValidateListValue {
    value?: string;
    listValue?: any[];
    additionalListValue?: any[];
}
