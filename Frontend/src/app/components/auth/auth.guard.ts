import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthServices } from './auth.services';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthServices , private router: Router) {}
    canActivate(
        router: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): boolean | Observable<boolean> | Promise<boolean> {
            const isAuth = this.authService.getisAuth();
            if ( ! isAuth) {
                this.router.navigate(['/login']);
            }
        return isAuth;
    }
}
