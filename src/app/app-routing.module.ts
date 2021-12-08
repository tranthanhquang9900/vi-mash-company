import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './dashboard/component/about/about.component';
import { HomeComponent } from './dashboard/component/home/home.component';
import { RecruitmentComponent } from './dashboard/component/recruitment/recruitment.component';
import { ServicesComponent } from './dashboard/component/services/services.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about-us',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'recruitment',component:RecruitmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
