import { NgModule, ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ClientsComponent } from './clients/clients.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CompanyComponent } from './company/company.component';
import { CareerComponent } from './career/career.component';
import { TechnologyComponent } from './technology/technology.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';


// Route Configuration
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'career', component: CareerComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'clients', component: ClientsComponent }
  
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);