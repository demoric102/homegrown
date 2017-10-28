import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { endpoints } from "../shared/endpoints";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/Observable";
import { Role } from "../models/role";

@Injectable()
export class RoleService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<Array<Role>> {
        return this.http.get<ApiResponse>(''.concat(environment.apiUrl, endpoints.ROLE,"?sort=name ASC")).map(response => response.data);
    }
}