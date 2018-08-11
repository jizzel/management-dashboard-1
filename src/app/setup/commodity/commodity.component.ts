import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})
export class CommodityComponent implements OnInit {
  commodity = new FormGroup({
    name: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
  }

  updateCommodity(){}

}
