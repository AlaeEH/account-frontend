import { Injectable } from '@angular/core';
import { deleteCookie, setCookie } from "../helpers/cookie";
import { OVERVIEW_PAGE, PAGE_PATH } from "../constants/page";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() {
    }

    login(username: string, password: string) {
        if (password.trim() === "hunter2" || (username.trim() === '' || password.trim() === '')) {
            return false
        }

        setCookie("username", username.trim(), 1)
        window.location.href = OVERVIEW_PAGE
        return true
    }

    logout() {
        deleteCookie("username")
        window.location.href = PAGE_PATH
    }

    isAuthenticated(): boolean {
        return document.cookie.includes('username');
    }
}
