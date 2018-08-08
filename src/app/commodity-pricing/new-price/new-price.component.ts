import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-price',
  templateUrl: './new-price.component.html',
  styleUrls: ['./new-price.component.css']
})
export class NewPriceComponent implements OnInit {
  commodityPrice = new FormGroup({
    price: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }
  updatePrice(){}

}
