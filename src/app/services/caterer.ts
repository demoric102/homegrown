import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Caterer } from "../models/caterer";

@Injectable()
export class CatererService {

    constructor(private http: HttpClient) { }

    createCaterer(caterer: Caterer): Observable<Caterer> {
        return this.http.post<Caterer>('/api/items', caterer);
    }
}