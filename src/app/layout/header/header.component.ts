import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  listNav = [
    { path: 'home', name: 'Home' },
    { path: 'about-us', name: 'About Us' },
    { path: 'services', name: 'Services' },
    { path: 'recruitment', name: 'Recruitment' },
  ];
  isHiddenSubMenu = true;
  showSubMenu() {
    this.isHiddenSubMenu = false;
  }
  overMenu() {
    this.isHiddenSubMenu = false;
  }
  outMenu() {
    this.isHiddenSubMenu = true;
  }
  constructor() {}

  ngOnInit(): void {}
}
