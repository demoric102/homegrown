import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Caterer } from "../models/caterer";
import { endpoints } from "../shared/endpoints";
import { environment } from "../../environments/environment";
import { Lga } from "../models/lga";
import { Observable } from "rxjs/Observable";
import { Bank } from "../models/bank";

@Injectable()
export class BankService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<Array<Bank>> {
        return this.http.get<ApiResponse>(''.concat(environment.apiUrl, endpoints.BANK,"?sort=name ASC")).map(response => response.data);
    }
}