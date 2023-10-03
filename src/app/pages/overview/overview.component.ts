import { Component } from '@angular/core';
import { Account } from "../../models/Account";
import { AccountService } from "../../services/account/account.service";
import { AccountHolder } from "../../models/AccountHolder";
import { AccountHolderService } from "../../services/account-holder/account-holder.service";

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
    accounts: Account[] = []
    accountHolders: AccountHolder[] = []
    accountModal = false

    constructor(private accountService: AccountService, private accountHolderService: AccountHolderService) {
    }

    ngOnInit() {
        this.accounts = this.accountService.getAccounts()
        this.accountHolders = this.accountHolderService.getAccountHolders()
    }

    openModal = () => {
        this.accountModal = true
    }

    closeModal = () => {
        this.accountModal = false
    }
}
