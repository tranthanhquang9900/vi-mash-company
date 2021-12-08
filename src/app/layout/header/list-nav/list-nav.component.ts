import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-nav',
  templateUrl: './list-nav.component.html',
  styleUrls: ['./list-nav.component.css']
})
export class ListNavComponent implements OnInit {

  listNav=[
    {path:'home',name:'Home'},
    {path:'about-us',name:'About Us'},
    {path:'services',name:'Services'},
    {path:'recruitment',name:'Recruitment'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
