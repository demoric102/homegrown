import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Caterer } from "../models/caterer";
import { endpoints } from "../shared/endpoints";
import { environment } from "../../environments/environment";

@Injectable()
export class CatererService {

    constructor(private http: HttpClient) { }

    createCaterer(caterer: Caterer): Observable<Caterer> {
        return this.http.post<Caterer>(''.concat(environment.apiUrl, endpoints.CREATE_CATERER), caterer);
    }

    datatable(data: any): Observable<Array<Caterer>> {
        return this.http.post<ApiResponse>(''.concat(environment.apiUrl, endpoints.CATERER_DATATABLE), data)
        .map(response => response.data)
        .catch((reason)=>reason.error.data);
    }
}