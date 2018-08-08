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
  selector: 'app-buyer-request',
  templateUrl: './buyer-request.component.html',
  styleUrls: ['./buyer-request.component.css']
})
export class BuyerRequestComponent implements OnInit {
  tableData: any = [
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

  constructor(private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.chRef.detectChanges();
    const table:any = $('#table_id');
    table.DataTable();
  }

}
