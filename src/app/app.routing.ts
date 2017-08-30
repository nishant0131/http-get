import { NgModule, ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee/employee-list.component'


// Route Configuration
export const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'employee-list', component: EmployeeListComponent }
 
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);