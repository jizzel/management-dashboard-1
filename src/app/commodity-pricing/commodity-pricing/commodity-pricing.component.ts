import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commodity-pricing',
  templateUrl: './commodity-pricing.component.html',
  styleUrls: ['./commodity-pricing.component.css']
})
export class CommodityPricingComponent implements OnInit {
  isActive = true;

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.isActive = !this.isActive;
  }

}
