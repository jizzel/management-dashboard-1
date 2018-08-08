import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';

export interface TableData {
  commodity: string;
  price: string;
  location: string;
  date: string;
}

@Component({
  selector: 'app-pricing-history',
  templateUrl: './pricing-history.component.html',
  styleUrls: ['./pricing-history.component.css']
})
export class PricingHistoryComponent implements OnInit {
  tableData: any;

  constructor(private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    let b = 0;
    this.chRef.detectChanges();
    const table:any = $('#table_id');
    table.DataTable();
    this.tableData = [
      {
        commodity: 'Kube',
        price: '1',
        location: 'Mampong',
        date: new Date(Date.now())
      },
      {
        commodity: 'Kube',
        price: '1',
        location: 'Mampong',
        date: new Date(Date.now())
      },
      {
        commodity: 'Kube',
        price: '1',
        location: 'Mampong',
        date: new Date(Date.now())
      },
      {
        commodity: 'Kube',
        price: '1',
        location: 'Mampong',
        date: new Date(Date.now())
      },
      {
        commodity: 'Kube',
        price: '1',
        location: 'Mampong',
        date: new Date(Date.now())
      },
      {
        commodity: 'Kube',
        price: '1',
        location: 'Mampong',
        date: new Date(Date.now())
      },
      {
        commodity: 'Kube',
        price: '1',
        location: 'Mampong',
        date: new Date(Date.now())
      },
      {
        commodity: 'Kube',
        price: '1',
        location: 'Mampong',
        date: new Date(Date.now())
      },
      {
        commodity: 'Kube',
        price: '1',
        location: 'Mampong',
        date: new Date(Date.now())
      },
      {
        commodity: 'Kube',
        price: '1',
        location: 'Mampong',
        date: new Date(Date.now())
      },
      {
        commodity: 'Kube',
        price: '1',
        location: 'Mampong',
        date: new Date(Date.now())
      },
      {
        commodity: 'Kube',
        price: '1',
        location: 'Mampong',
        date: new Date(Date.now())
      },
      {
        commodity: 'Kube',
        price: '1',
        location: 'Mampong',
        date: new Date(Date.now())
      },
      {
        commodity: 'Kube',
        price: '1',
        location: 'Mampong',
        date: new Date(Date.now())
      },
      {
        commodity: 'Kube',
        price: '1',
        location: 'Mampong',
        date: new Date(Date.now())
      },
      {
        commodity: 'Kube',
        price: '1',
        location: 'Mampong',
        date: new Date(Date.now())
      },
    ];
  }


}
