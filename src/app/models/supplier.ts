import { Food } from "./food";
import { Zone } from "./zone";

export class Supplier {
    name: string;
    address: string;
    phone: string;
    foods: Array<Food>;
    zone: Zone;
}