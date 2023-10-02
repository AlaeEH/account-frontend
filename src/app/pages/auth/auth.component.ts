import { Component } from '@angular/core';
import { AuthService } from "../../services/auth.service";


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})

export class AuthComponent {
    title = 'Login'
    username = ''
    password = ''
    error = false
    errorMessage = ''

    constructor(private authService: AuthService) {
    }

    login() {
        const login = this.authService.login(this.username, this.password)

        if (!login) {
            this.error = true
        }
    }

    setUsername(e: Event) {
        this.username = (e.target as HTMLInputElement).value;
    }

    setPassword(e: Event) {
        this.password = (e.target as HTMLInputElement).value;
    }
}
