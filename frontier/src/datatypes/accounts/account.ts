import { AccountStatus } from '../enums/accountstatus.enum';

export interface Account {
    AccountStatusId: AccountStatus,
    AmountDue: number,
    Email: string,
    FirstName: string,
    Id: number,
    LastName: string,
    PaymentDueDate: Date,
    PhoneNumber: number
}