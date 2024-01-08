import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashbordComponent } from './component/admin-dashbord/admin-dashbord.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ServiceComponent } from './component/service/service.component';
import { ContactComponent } from './component/contact/contact.component';
import { AdminRoutingModule } from './admin-routing.module';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminDashbordComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent, 
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    PortfolioComponent,
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
