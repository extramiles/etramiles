import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  onClickOutside(event: Object) {
    if (event && event['value'] === true) {
      this.isOpen= false;
    }
  }
}
