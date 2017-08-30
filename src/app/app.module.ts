import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule} from '@angular/router';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const FirebaseConfig = {
  apiKey: "AIzaSyAoZG55-GNKhtza9d4Roruk9liHnrQgC4o",
  authDomain: "angular-app-b97df.firebaseapp.com",
  databaseURL: "https://angular-app-b97df.firebaseio.com",
  projectId: "angular-app-b97df",
  storageBucket: "angular-app-b97df.appspot.com",
  messagingSenderId: "728923504961"
};
//import { SocialShareModule } from 'social-share-ng2';
//import {DayPilot} from "daypilot-pro-angular"
import * as $ from 'jquery';
import { routing } from "./app.routing";
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { EmployeeListComponent } from './employee/employee-list.component'


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
    AngularFireModule.initializeApp(FirebaseConfig),
    routing,
    AngularFireDatabaseModule,
    AngularFireAuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
