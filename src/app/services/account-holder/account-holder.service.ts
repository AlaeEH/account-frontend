import { Injectable } from '@angular/core';
import { AccountHolder } from "../../models/AccountHolder";
import { AccountStatus } from "../../models/Account";

@Injectable({
    providedIn: 'root'
})
export class AccountHolderService {
    accountHolders: AccountHolder[] = [
        {
            bsn: 2323,
            name: "Alae El Hani",
            accounts: [
                {
                    id: 10,
                    iban: "NL55ABNA0620822074",
                    status: AccountStatus.ACTIVE,
                    balance: 17.93
                }
            ]
        }
    ]

    constructor() {
    }

    getAccountHolders = () => {
        return this.accountHolders
    }

    saveAccountHolder = (accountHolder: AccountHolder) => {
        this.accountHolders.push(accountHolder)
    }
}
