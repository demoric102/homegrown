import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { endpoints } from "../shared/endpoints";
import { environment } from "../../environments/environment";
import { Food } from '../models/food';

@Injectable()
export class FoodService {

    constructor(private http: HttpClient) { }

    createFood(food: Food): Observable<Food> {
        return this.http.post<Food>(''.concat(environment.apiUrl, endpoints.FOOD), food);
    }

    getAll(): Observable<Array<Food>> {
        return this.http.get<ApiResponse>(''.concat(environment.apiUrl, endpoints.FOOD, "?limit=null&sort=name ASC")).map(response => response.data);
    }
}