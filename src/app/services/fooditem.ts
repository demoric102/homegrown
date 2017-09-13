import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Caterer } from "../models/caterer";
import { endpoints } from "../shared/endpoints";
import { environment } from "../../environments/environment";

@Injectable()
export class FooditemService {

    constructor(private http: HttpClient) { }

    createCaterer(caterer: Caterer): Observable<Caterer> {
        return this.http.post<Caterer>(''.concat(environment.apiUrl,endpoints.CREATE_CATERER), caterer);
    }
}