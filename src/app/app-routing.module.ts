import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './routes/home/home.component';
import {ProductComponent} from './routes/product/product.component';
import {ProductFiltirationComponent} from './components/product-filtiration/product-filtiration.component';
import {CategoryComponent} from './routes/category/category.component';
import { SignupComponent } from './components/signup/signup.component';
import { MainComponent } from './components/main/main.component';
import { VendorSignupComponent } from './components/vendor-signup/vendor-signup.component';
import { LoginComponent } from './routes/auth/login/login.component';
import { HomeProfileComponent } from './components/home-profile/home-profile.component';
import { RouterComponent } from './components/router/router.component';


const routes: Routes = [
  {path: '', component: MainComponent, children:[
    {path: '', component: HomeComponent},
  {path: 'productfilter', component: ProductFiltirationComponent},
  {path: 'product', component: ProductComponent},
  {path: 'category', component: CategoryComponent},
  ]},
  
  
  {path: 'settings', component: RouterComponent , children:[
    {path: '', redirectTo:'orders' , pathMatch : 'full'},
    {path: 'orders', component: HomeProfileComponent},
    
  ]},


  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},

  {path: 'vendor_signUp', component: VendorSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
