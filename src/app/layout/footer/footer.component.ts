import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
