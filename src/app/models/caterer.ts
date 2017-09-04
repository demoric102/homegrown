import { BankAccount } from "./bankAccount";
import { School } from "./school";
import { Zone } from "./zone";

export class Caterer {
    firstname: string;
    lastname: string;
    address: string;
    phone: string;
    school: School;
    zone: Zone;
    bankAccount: BankAccount;
}