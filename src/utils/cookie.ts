export const setCookie = (cname: string, cvalue: string, exdays: number = 1): void => {
    const date: Date = new Date();
    date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};

export const getCookie = (cname: string): string => {
    const name: string = cname + '=';
    const decodedCookie: string = decodeURIComponent(document.cookie);
    const cookieArr: string[] = decodedCookie.split(';');

    for (let i = 0; i < cookieArr.length; i++) {
        let cookieItem: string = cookieArr[i];
        while (cookieItem.charAt(0) === ' ') {
            cookieItem = cookieItem.substring(1);
        }
        if (cookieItem.indexOf(name) === 0) {
            return cookieItem.substring(name.length, cookieItem.length);
        }
    }
    return '';
};

export const deleteCookie = (cname: string): void => {
    setCookie(cname, '', -1);
};
