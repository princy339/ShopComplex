import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'home',component:HomeComponent},
                        {path:'header',component:HeaderComponent},
                        {path:'about',component:AboutComponent},
                        {path:'login',component:LoginComponent},
                        {path:'signup',component:SignupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
