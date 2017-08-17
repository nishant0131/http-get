import { NgModule, ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { StaffComponent } from './staff/staff.component';
import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './home/home.component';
import { CurriculamComponent } from "./curriculam/curriculam.component";

// Route Configuration
export const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'locations', component: LocationComponent },
  { path: 'curriculam', component: CurriculamComponent }
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);