import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:"",redirectTo:'/login',pathMatch:'full'
  },  
  {
    path:"login",component:LoginComponent
  },
  {
    path:"forgotpassword",component:ForgotpasswordComponent
  },
  {
    path: 'admin',
    canActivate:[AuthGuard],
    loadChildren: () => import('./module/admin/admin-routing.module').then((m)=>m.AdminRoutingModule)
  },
    {
    path:"**",component:NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
