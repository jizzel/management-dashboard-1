import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../app-services/auth-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: any = null;
  loading = false;
  credentials = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required),
    remember: new FormControl('')
  });

  constructor(private authService:AuthService,
              private route: ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
  }

  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  login(){
    console.log('login');
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    this.loading = true;

    if (this.credentials.valid) {
      this.credentials.value.email = this.credentials.value.email.trim();

      this.authService.login(this.credentials.value)
        .subscribe(
          (res: any) => {
            if (res && res.token ) {
              localStorage.setItem('token', res.token);
              localStorage.setItem('name', res.name);
              this.router.navigate([ returnUrl || '/commodity'])
            } else {
              this.message = res.message;
            }
            this.loading = false;

          },
          err => this.loading = false
        );
    }
    else {
      this.message = 'Invalid user credentials';
      this.loading = false;
    }
  }

}
