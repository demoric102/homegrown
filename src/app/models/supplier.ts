import { Food } from "./food";
import { Zone } from "./zone";
import { BankAccount } from "./bankAccount";

export class Supplier {
    firstname: string;
    lastname: string;
    address: string;
    phone: string;
    foods: Array<Food>;
    zone: Zone;
    bankAccount: BankAccount;
}