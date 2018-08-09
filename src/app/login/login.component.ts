import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../app-services/auth-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    remember: new FormControl('')
  });

  constructor(private authService:AuthService,
              private route: ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    if(this.authService.login(this.credentials.value)){
      this.router.navigate([ returnUrl || '/commodity'])
    }
  }

}
