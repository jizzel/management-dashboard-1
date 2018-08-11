import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  url = 'http://45.55.210.18:3016';
  user = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
    status: new FormControl('')
  })

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  addUser(){
    this.http.put(this.url + '/admin/users',this.user.value)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
        )
  }

}
