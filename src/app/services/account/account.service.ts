import { Injectable } from '@angular/core';
import { Account, AccountStatus } from "../../models/Account";

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    accounts: Account[] = [
        { id: 1, iban: 'NL01ABCD1234567890', balance: 1000, status: AccountStatus.ACTIVE },
        { id: 2, iban: 'NL02EFGH0987654321', balance: 500, status: AccountStatus.INACTIVE },
        { id: 3, iban: 'NL03IJKL5678901234', balance: 2000, status: AccountStatus.BLOCKED },
    ]

    constructor() {
    }

    getAccounts(): Account[] {
        return this.accounts
    }

    saveAccount(account: Account) {
        this.accounts.push(account)
    }
}
