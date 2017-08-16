import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ClientsComponent } from './clients/clients.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CompanyComponent } from './company/company.component';
import { CareerComponent } from './career/career.component';
import { TechnologyComponent } from './technology/technology.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule   } from '@angular/router';
import { routing } from "./app.routing";

//import { SocialShareModule } from 'social-share-ng2';
//import {DayPilot} from "daypilot-pro-angular"
import * as $ from 'jquery';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ClientsComponent,
    PortfolioComponent,
    CompanyComponent,
    CareerComponent,
    TechnologyComponent,
    ServicesComponent,
    //SocialShareModule,
    HomeComponent,

    

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
