import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ComponentComponent } from './dashboard/component/component.component';
import { HomeComponent } from './dashboard/component/home/home.component';
import { AboutComponent } from './dashboard/component/about/about.component';
import { ServicesComponent } from './dashboard/component/services/services.component';
import { RecruitmentComponent } from './dashboard/component/recruitment/recruitment.component';
import { DropdownComponent } from './layout/header/dropdown/dropdown.component';
import { ListNavComponent } from './layout/header/list-nav/list-nav.component';
import { LogoComponent } from './layout/header/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ComponentComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    RecruitmentComponent,
    DropdownComponent,
    ListNavComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
