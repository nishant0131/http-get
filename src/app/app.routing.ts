import { NgModule, ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


// Route Configuration
export const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path: 'home', component: HomeComponent }
 
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);