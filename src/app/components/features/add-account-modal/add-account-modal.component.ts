import { Component, EventEmitter, Output } from '@angular/core';
import { Account, AccountStatus } from "../../../models/Account";
import { AccountService } from "../../../services/account/account.service";

@Component({
    selector: 'app-add-account-modal',
    templateUrl: './add-account-modal.component.html',
    styleUrls: ['./add-account-modal.component.scss']
})
export class AddAccountModalComponent {
    protected readonly AccountStatus = AccountStatus;
    iban: string = ''
    balance: number = 0.00
    status: AccountStatus = AccountStatus.ACTIVE

    @Output() onClose: EventEmitter<void> = new EventEmitter<void>()

    constructor(private accountService: AccountService) {
    }

    saveAccount = () => {
        const account: Account = {
            id: 25,
            iban: this.iban,
            balance: this.balance,
            status: this.status
        }

        this.accountService.saveAccount(account)
        this.closeAndEmit()
    }

    closeAndEmit = () => {
        this.onClose.emit()
    }

    setIban = (e: Event) => {
        this.iban = (e.target as HTMLInputElement).value;
    }

    setBalance = (e: Event) => {
        this.balance = +(e.target as HTMLInputElement).value;
    }
}
