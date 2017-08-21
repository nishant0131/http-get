import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule} from '@angular/router';
import { routing } from "./app.routing";

//import { SocialShareModule } from 'social-share-ng2';
//import {DayPilot} from "daypilot-pro-angular"
import * as $ from 'jquery';

import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { EmployeeListComponent } from './employee-list.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    EmployeeListComponent,
 ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
   // DayPilotModule,
    routing
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
