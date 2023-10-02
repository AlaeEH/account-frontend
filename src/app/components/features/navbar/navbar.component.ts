import { Component } from '@angular/core';
import { AUTH_PATH, OVERVIEW_PAGE, PAGE_PATH } from "../../../constants/page";
import { AuthService } from "../../../services/auth.service";
import { getCookie } from "../../../helpers/cookie";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    protected readonly AUTH_PATH = AUTH_PATH;
    protected readonly OVERVIEW_PAGE = OVERVIEW_PAGE;
    protected readonly PAGE_PATH = PAGE_PATH;

    authenticated = false

    constructor(private authService: AuthService) {
        this.authenticated = this.authService.isAuthenticated()
    }

    logout() {
        this.authService.logout()
    }

    protected readonly getCookie = getCookie;
}
