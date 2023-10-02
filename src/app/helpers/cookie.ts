export const getCookie = (name: string): string | null => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
};

export const setCookie = (name: string, value: string, expirationInDays: number) => {
    const expirationDate = new Date()
    expirationDate.setDate(expirationDate.getDate() + expirationInDays);
    document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`
}

export const deleteCookie = (name: string) => {
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() - 1);
    document.cookie = `${name}=; expires=${expirationDate.toUTCString()}; path=/`;
};
