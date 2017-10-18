import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Caterer } from "../models/caterer";
import { endpoints } from "../shared/endpoints";
import { environment } from "../../environments/environment";
import { Lga } from "../models/lga";
import { Observable } from "rxjs/Observable";
import { User } from "../models/user";
import { Auth } from '../models/auth';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Injectable()
export class UserService {
    private redirectUrl: string = '/';

    constructor(private http: HttpClient, protected localStorage: AsyncLocalStorage) { }

    createUser(user: User): Observable<User> {
        return this.http.post<User>(''.concat(environment.apiUrl, endpoints.USER), user);
    }

    loginUser(user: User): Observable<Auth> {
        return this.http.post<ApiResponse>(''.concat(environment.apiUrl, endpoints.USER_LOGIN), user)
        .map(response => response.data);
    }

	getRedirectUrl(): string {
		return this.redirectUrl;
    }
    
	setRedirectUrl(url: string): void {
		this.redirectUrl = url;
	}

    isUserLoggedIn():boolean{
        if(localStorage.getItem('uid') && localStorage.getItem('token')){
            return true;
        }
        return false;
    }

    editUser(user: User): Observable<User> {
        return this.http.put<User>(''.concat(environment.apiUrl, endpoints.USER,'/', user.id), user);
    }

    datatable(data: any): Observable<Array<User>> {
        return this.http.post<ApiResponse>(''.concat(environment.apiUrl, endpoints.USER_DATATABLE), data)
        .map(response => response.data)
        .catch((reason)=>reason.error.data);
    }
    
    getUser(id: any): Observable<User> {
        return this.http.get<ApiResponse>(''.concat(environment.apiUrl, endpoints.USER,'?where={"id":"',id,'"}&populate=[bank]'))
        .map(response => response.data[0]);
    }
}