import { BankAccount } from "./bankAccount";
import { School } from "./school";
import { Lga } from "./lga";

export class Caterer {
    firstname: string;
    lastname: string;
    address: string;
    phone: string;
    email: string;
    school: School;
    lga: Lga;
    bankAccount: BankAccount = new BankAccount();
}