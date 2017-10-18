import { Role } from "./role";

export class User {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
    accessToken: string;
    passport: string;
    roles: Role;
    status: string;
}