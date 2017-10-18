import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { UserService } from "../services/user";

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private userService: UserService, private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        if (this.userService.isUserLoggedIn()) {
            return true;
        }
        this.userService.setRedirectUrl(url);
        this.router.navigate(['authentication/signin']);
        return false;
    }
} 