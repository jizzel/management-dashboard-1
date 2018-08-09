import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth-service.service";

@Injectable()
export class AuthGuard {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot){
    if(this.authService.isLoggedIn()) return true;
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}})
      .then(res => console.log('@routeGuard: ',res));
    return false;
  }

}
