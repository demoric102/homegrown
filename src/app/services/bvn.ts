import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Caterer } from "../models/caterer";
import { endpoints } from "../shared/endpoints";
import { environment } from "../../environments/environment";
import { Lga } from "../models/lga";
import { Observable } from "rxjs/Observable";
import { Bvn } from "../models/bvn";

@Injectable()
export class BvnService {

    constructor(private http: HttpClient) { }

    verify(bvn: Bvn): Observable<Bvn> {
        return this.http.post<ApiResponse>(''.concat(environment.apiUrl, endpoints.BVN_VERIFY), bvn).map(response => response.data);
    }
}