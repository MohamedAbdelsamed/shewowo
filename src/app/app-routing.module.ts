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
import { OrdersComponent } from './components/orders/orders.component';
import { AddressComponent } from './components/address/address.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ReturnComponent } from './components/return/return.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CaretComponent } from './components/caret/caret.component';



const routes: Routes = [
  {path: '', component: MainComponent, children:[
    {path: '', component: HomeComponent},
  {path: 'products', component: ProductFiltirationComponent},
  {path: 'products/:id', component: ProductFiltirationComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'category/:id', component: CategoryComponent},
  {path: 'caret', component: CaretComponent},
  ]},
  
  
  {path: 'settings', component: RouterComponent , children:[
    {path: '', redirectTo:'orders' , pathMatch : 'full'},
    {path: 'orders', component: OrdersComponent},
    {path: 'address', component: AddressComponent},
    {path: 'payment', component: PaymentComponent},
    {path: 'return', component: ReturnComponent},
    {path: 'profile', component: ProfileComponent},
  ]},


  {path: 'signup', component: SignupComponent},
  {path: ':action', component: LoginComponent},

  
  {path: 'vendor_signUp', component: VendorSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
