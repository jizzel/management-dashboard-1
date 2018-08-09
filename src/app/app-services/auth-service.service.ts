import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  url = '';

  constructor(private http:HttpClient,private router: Router) { }

  public login(resource){
    console.log(resource);
    localStorage.setItem('user', 'Testing User');
    return true;
    // return this.http.put(this.url, resource)
    //   .map(res => {
    //     let response = res.json();
    //     if(response.status == '500'){
    //       localStorage.setItem('token', response.token);
    //       return response;
    //     }else {
    //       return response;
    //     }
    //   });
  }

  public logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
      .then(re => console.log('logged out'));
    // .catch(re => console.log(''))
  }

  public get currentUser(){
    let token = localStorage.getItem('user');
    if(!token) return null;
    return token;
    // if(!token) return null;
    // return new JwtHelper().decodeToken(token);
  }

  public isLoggedIn(){
    let token = localStorage.getItem('user');
    if(!token) return false;
    return true;

    // return tokenNotExpired();

  }
}
