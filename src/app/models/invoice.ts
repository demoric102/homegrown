import { Caterer } from "./caterer";
import { School } from "./school";
import { Supplier } from "./supplier";

export class Invoice {
    school: School;
    supplier: Supplier;
    caterer: Caterer;
}