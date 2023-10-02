import { Component, Input } from '@angular/core';
import { Account } from "../../../models/Account";

@Component({
    selector: 'app-account-overview',
    templateUrl: './account-overview.component.html',
    styleUrls: ['./account-overview.component.scss']
})
export class AccountOverviewComponent {
    @Input() accounts: Account[] = []
}
