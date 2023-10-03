import { Account } from "./Account";

export interface AccountHolder {
    bsn: number
    name: string
    accounts?: Account[]
}
