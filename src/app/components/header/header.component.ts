import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {ROUTES} from "../side-bar/side-bar.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private listTitles: any[];
  location: Location;
  private nativeElement: Node;
  private toggleButton;
  private sidebarVisible: boolean;

  @ViewChild("app-header") button;

  constructor(location:Location, private renderer : Renderer, private element : ElementRef) {
    this.location = location;
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
  }

  ngOnInit(){
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    let navbar : HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
  }
  getTitle(){
    let titlee = window.location.hash;
    titlee = titlee.substring(1);
    for(let item = 0; item < this.listTitles.length; item++){
      if(this.listTitles[item].path === titlee){
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }
  sidebarToggle(){
    let toggleButton = this.toggleButton;
    let body = document.getElementsByTagName('body')[0];

    if(this.sidebarVisible == false){
      setTimeout(function(){
        toggleButton.classList.add('toggled');
      },500);
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    }
  }
}

