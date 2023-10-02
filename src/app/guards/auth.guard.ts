import { CanActivate, Router } from '@angular/router';
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";
import { AUTH_PATH } from "../constants/page";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public authService: AuthService, public router: Router) {
    }

    canActivate(): boolean {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate([AUTH_PATH]);
            return false;
        }
        return true;
    }
}
