export interface Account {
    id: number
    iban: string
    balance: number,
    status: AccountStatus
}

export enum AccountStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    BLOCKED = 'BLOCKED'
}
