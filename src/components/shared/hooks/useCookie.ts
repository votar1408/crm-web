import {useCallback} from 'react';
import {CookieData, HookCookieFunc} from '../../../interfaces/Common';
import {deleteCookie, getCookie, setCookie} from '../../../utils/cookie';
import {HookCookieData} from './../../../interfaces/Common';

const cookiePlayerId: string = 'crmWebPlayerId';

interface CookieFunc {
    (): CookieData;
}

const checkCookie: CookieFunc = (): CookieData => {
    const playerId: string = getCookie(cookiePlayerId);

    return {
        playerId
    };
};

export const useCookie: HookCookieFunc = (): HookCookieData => {
    const saveCookie = useCallback(({playerId}: CookieData) => {
        setCookie(cookiePlayerId, playerId);
    }, []);

    const removeCookie = useCallback(() => {
        deleteCookie(cookiePlayerId);
    }, []);

    return {...checkCookie(), saveCookie, removeCookie};
};
