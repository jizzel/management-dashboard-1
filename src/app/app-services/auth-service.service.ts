import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {ConfigService} from "./config.service";
import { JwtHelperService } from '@auth0/angular-jwt';

const JwtHelper = new JwtHelperService();

@Injectable()
export class AuthService {
  url = ConfigService.base_url + '/admin/login';

  constructor(private http:HttpClient,private router: Router) { }

  public login(resource){
    console.log(resource);
    return this.http.put(this.url, resource)
  }

  public logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
      .then(re => console.log('logged out'));
    // .catch(re => console.log(''))
  }

  public get currentUser(){
    let token = localStorage.getItem('token');
    if(!token) return null;
    // return token;
    // if(!token) return null;
    return JwtHelper.decodeToken(token);
  }

  public isLoggedIn(){
    let token = localStorage.getItem('token');
    // if(!token) return false;
    // return true;

    return !JwtHelper.isTokenExpired(token);

  }
}
