import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

declare var M: any;

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
            if(!this.authService.loggedIn() && !this.authService.googleLoggedIn()){
                this.router.navigate(['/main']);
                M.toast({html: 'Need to Log In' , classes: 'rounded'});
                this.authService.deleteToken();
                return false;
            } else {
                return true; 
            }         
    }
}