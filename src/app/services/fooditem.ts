import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Food } from "../models/food";
import { endpoints } from "../shared/endpoints";
import { environment } from "../../environments/environment";
import 'rxjs/Rx';

@Injectable()
export class FooditemService {

    constructor(private http: HttpClient) { }

    createFood(food: Food): Observable<Food> {
        return this.http.post<Food>(''.concat(environment.apiUrl,endpoints.FOOD), food);
    }

    editUser(food: Food): Observable<Food> {
        return this.http.put<Food>(''.concat(environment.apiUrl, endpoints.FOOD,'/', food.id), food);
    }

    datatable(data: any): Observable<Array<Food>> {
        return this.http.post<ApiResponse>(''.concat(environment.apiUrl, endpoints.FOOD_DATATABLE), data)
        .map(response => response.data)
        .catch((reason)=>reason.error.data);
    }
    getFood(id: any): Observable<Food> {
        return this.http.get<ApiResponse>(''.concat(environment.apiUrl, endpoints.FOOD,'?where={"id":"',id,'"}&populate=[Food]'))
        .map(response => response.data[0]);
    }
    getAll(): Observable<Array<Food>> {
        return this.http.get<ApiResponse>(''.concat(environment.apiUrl, endpoints.FOOD,"?sort=name ASC")).map(response => response.data);
    }
}