import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let token = JSON.parse(localStorage.getItem("user-data") || "{}").token;

    if (token) {
      let tokenExpireDate = JSON.parse(localStorage.getItem("user-data") || "{}").tokenExpireDate;

      if(tokenExpireDate!= null && Date.parse(tokenExpireDate)> Date.now())
        return true;
    }
    
    localStorage.clear();
    this._router.navigate(["/login"])
    return false;
  }

}