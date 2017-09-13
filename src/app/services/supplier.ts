import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { endpoints } from "../shared/endpoints";
import { environment } from "../../environments/environment";
import { Supplier } from "../models/supplier";

@Injectable()
export class SupplierService {

    constructor(private http: HttpClient) { }

    createSupplier(supplier: Supplier): Observable<Supplier> {
        return this.http.post<Supplier>(''.concat(environment.apiUrl,endpoints.SUPPLIER), supplier);
    }
}