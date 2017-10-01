import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { endpoints } from "../shared/endpoints";
import { environment } from "../../environments/environment";
import { Supplier } from "../models/supplier";

@Injectable()
export class SupplierService {

    constructor(private http: HttpClient) { }

    createSupplier(supplier: Supplier): Observable<Supplier> {
        return this.http.post<Supplier>(''.concat(environment.apiUrl, endpoints.SUPPLIER), supplier);
    }

    datatable(data: any): Observable<Array<Supplier>> {
        return this.http.post<ApiResponse>(''.concat(environment.apiUrl, endpoints.SUPPLIER_DATATABLE), data)
            .map(response => response.data)
            .catch((reason) => reason.error.data);
    }

    getSupplier(id: any): Observable<Supplier> {
        return this.http.get<ApiResponse>(''.concat(environment.apiUrl, endpoints.SUPPLIER, '?where={"id":"', id, '"}&populate=[bank,lga]'))
            .map(response => response.data[0]);
    }

    getWhereLga(lga): Observable<Array<Supplier>> {
        return this.http.get<ApiResponse>(''.concat(environment.apiUrl, endpoints.SUPPLIER, '?where={"lga":"', lga, '"}&limit=null&sort=name ASC')).map(response => response.data);
    }
}