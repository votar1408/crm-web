import {texts} from '../consts';
import {CortegeData, ValidateListValue, ValidateTextFieldRule} from '../interfaces/Common';

export const getTextKey = (value: string): string => {
    return (Object.entries(texts).find((el: CortegeData) => {
        return el[1] === value;
    }) as CortegeData)[0];
};

const verifyRule = ({value, listValue, additionalListValue}: ValidateListValue, rule: ValidateTextFieldRule) => {
    const valueTrim: string = value || '';

    switch (rule) {
        case 'base': {
            return valueTrim.match('^[A-Za-z0-9_\\-]+$') !== null;
        }
        case 'productName': {
            return valueTrim.match('^[A-Za-z0-9_\\-.]+$') !== null;
        }
        case 'moreZero': {
            return Number(valueTrim) > 0 && !NaN;
        }
        case 'onlyInt': {
            return valueTrim.match('^[0-9]+$') !== null;
        }
        default:
            return false;
    }
};

export const checkNotError = (
    validateListValue: ValidateListValue,
    rules: ValidateTextFieldRule[] = ['base']
): boolean => {
    return rules.every((el: ValidateTextFieldRule) => {
        return verifyRule(validateListValue, el);
    });
};
