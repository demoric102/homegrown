import { Role } from "./role";

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