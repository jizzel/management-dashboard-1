import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  isActive = true;

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.isActive = !this.isActive;
  }
}
