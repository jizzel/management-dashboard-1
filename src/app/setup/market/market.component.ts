import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConfigService} from "../../app-services/config.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': ConfigService.getToken()
  })
};

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  market = new FormGroup({
    name: new FormControl(''),
    status: new FormControl('active')
  })

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  updateMarket(){
    this.http.put(ConfigService.base_url + '/admin/setup/market', this.market.value, httpOptions)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
        )
  }

}
