import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { AsyncLocalStorage } from "angular-async-local-storage";
import { Router } from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private router: Router,protected localStorage: AsyncLocalStorage) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(request.method === 'OPTIONS' || !localStorage.getItem('token')){
            return next.handle(request);
        }
        request = request.clone({
            setHeaders: {
                "Authorization": localStorage.getItem('token') || "",
                "Content-Type": "application/json"
            }
        });
        console.log(request);
        return next.handle(request).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              // do stuff with response if you want
            }
          }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                this.router.navigate(['authentication/signin']);
              }
            }
          });
    }
}