import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { endpoints } from "../shared/endpoints";
import { environment } from "../../environments/environment";
import { Invoice } from '../models/invoice';

@Injectable()
export class InvoiceService {

    constructor(private http: HttpClient) { }

    createInvoice(invoice: Invoice): Observable<Invoice> {
        return this.http.post<Invoice>(''.concat(environment.apiUrl, endpoints.INVOICE), invoice);
    }
    datatable(data: any): Observable<Array<Invoice>> {
        return this.http.post<ApiResponse>(''.concat(environment.apiUrl, endpoints.INVOICE_DATATABLE), data)
        .map(response => response.data)
        .catch((reason)=>reason.error.data);
    }
    getInvoice(id: any): Observable<Invoice> {
        return this.http.get<ApiResponse>(''.concat(environment.apiUrl, endpoints.INVOICE,'?where={"id":"',id,'"}&populate=[caterer,supplier]'))
        .map(response => response.data[0]);
    }
}