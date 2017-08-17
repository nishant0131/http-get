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
import { StaffComponent } from './staff/staff.component';
import { PrincipalComponent } from './principal/principal.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { LocationComponent } from './location/location.component';
import { CurriculamComponent } from './curriculam/curriculam.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StaffComponent,
    PrincipalComponent,
    FacilitiesComponent,
    LocationComponent,
    CurriculamComponent,
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
