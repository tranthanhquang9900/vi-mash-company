import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  listNav=[
    {path:'home',name:'Home'},
    {path:'about-us',name:'About Us'},
    {path:'services',name:'Services'},
    {path:'recruitment',name:'Recruitment'},
  ]
  isHiddenSubMenu=true;
  showSubMenu(){
    this.isHiddenSubMenu = false;
  }
  overMenu(){
    this.isHiddenSubMenu = false;
  }
  outMenu(){
    this.isHiddenSubMenu = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
