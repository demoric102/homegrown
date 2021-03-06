import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Caterer } from "../models/caterer";
import { endpoints } from "../shared/endpoints";
import { environment } from "../../environments/environment";
import { School } from "../models/school";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SchoolService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<Array<School>> {
        return this.http.get<ApiResponse>(''.concat(environment.apiUrl, endpoints.SCHOOL, "?limit=null&sort=name ASC")).map(response => response.data);
    }

    getLga(lga): Observable<Array<School>> {
        return this.http.get<ApiResponse>(''.concat(environment.apiUrl, endpoints.SCHOOL, '?where={"lga":"', lga, '"}&limit=null&sort=name ASC')).map(response => response.data);
    }
}