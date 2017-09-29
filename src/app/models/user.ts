import { Role } from "./Role";

export class User {
    id: string;
    firstname: string;
    lastname: string;
    phone: string;
    accessToken: string;
    passport: string;
    roles: Role;
    status: string;
}