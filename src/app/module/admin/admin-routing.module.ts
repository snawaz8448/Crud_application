import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashbordComponent } from './component/admin-dashbord/admin-dashbord.component';
import { HomeComponent } from './component/home/home.component';
import { ServiceComponent } from './component/service/service.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';

const routes: Routes = [
  {
    path:'',component:AdminDashbordComponent,
    children:[
      {
        path:'home',component:HomeComponent
      },
      { 
        path:'service',component:ServiceComponent
      },
      { 
        path:'portfolio',component:PortfolioComponent
      },
      {
        path:'aboutus',component:AboutComponent
      },
      {
        path:'contact',component:ContactComponent
      },
      {
        path:'', redirectTo:'/admin/home',pathMatch:'full'
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
