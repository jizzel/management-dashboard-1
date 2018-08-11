import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {
  role = new FormGroup({
    name: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
  }

  addRole(){}

}
