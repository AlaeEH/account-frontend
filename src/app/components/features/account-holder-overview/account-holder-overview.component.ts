import { Component, Input } from '@angular/core';
import { AccountHolder } from "../../../models/AccountHolder";

@Component({
    selector: 'app-account-holder-overview',
    templateUrl: './account-holder-overview.component.html',
    styleUrls: ['./account-holder-overview.component.scss']
})
export class AccountHolderOverviewComponent {
    @Input() accountHolders: AccountHolder[] = []
}
