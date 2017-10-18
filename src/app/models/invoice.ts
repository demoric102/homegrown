import { Caterer } from "./caterer";
import { School } from "./school";
import { Supplier } from "./supplier";
import { InvoiceItem } from "./invoiceItem";

export class Invoice {
    id: string;
    createdAt: string;
    school: School;
    supplier: Supplier;
    caterer: Caterer;
    invoiceItems: Array<InvoiceItem>;
}