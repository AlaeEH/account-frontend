import { Component } from '@angular/core';
import { Account } from "../../models/Account";
import { AccountService } from "../../services/account/account.service";

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
    accounts: Account[] = []
    accountModal = false

    constructor(private accountService: AccountService) {
    }

    ngOnInit() {
        this.accounts = this.accountService.getAccounts()
    }

    openModal = () => {
        this.accountModal = true
    }

    closeModal = () => {
        this.accountModal = false
    }
}
