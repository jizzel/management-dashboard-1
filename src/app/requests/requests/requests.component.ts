import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  isFarmerActive = true;
  isBuyerActive = false;
  isHistoryActive = false;

  constructor() { }

  ngOnInit() {
  }

  toggle(tab:string) {
    switch (tab) {
      case 'farmer':
        this.isFarmerActive = true;
        this.isBuyerActive = false;
        this.isHistoryActive = false;
        break;

      case 'buyer':
        this.isFarmerActive = false;
        this.isBuyerActive = true;
        this.isHistoryActive = false;
        break;

      case 'history':
        this.isFarmerActive = false;
        this.isBuyerActive = false;
        this.isHistoryActive = true;
        break;


    }
  }

}
