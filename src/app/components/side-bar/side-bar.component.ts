import { Component, OnInit } from '@angular/core';

// declare const $:any;

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
  { path: '/commodity', title: 'Commodity Pricing',  icon:'ti-package', class: '' },
  { path: '/requests', title: 'Requests',  icon:'ti-hand-stop', class: '' },
  { path: '/payments', title: 'Payment Transactions',  icon:'ti-wallet', class: '' },
  { path: '/customers', title: 'Customers',  icon:'ti-face-smile', class: '' },
  { path: '/users', title: 'Users',  icon:'ti-user', class: '' },
  { path: '/reports', title: 'Reports',  icon:'ti-align-justify', class: '' },
  { path: '/help', title: 'Help',  icon:'ti-help', class: '' },
  { path: '/settings', title: 'Settings',  icon:'ti-settings', class: 'active-pro' }
];

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isNotMobileMenu(){
    if(window.innerWidth > 991){
      return false;
    }
    return true;
  }

}

