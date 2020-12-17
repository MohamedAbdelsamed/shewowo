import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/auth/login/login.component';
import { RegisterComponent } from './routes/auth/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TopSliderComponent } from './components/top-slider/top-slider.component';
import { CategorySliderComponent } from './components/category-slider/category-slider.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HomeOffersComponent } from './components/home-offers/home-offers.component';
import { ProductComponent } from './routes/product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductFiltirationComponent } from './components/product-filtiration/product-filtiration.component';
import { CategoryComponent } from './routes/category/category.component';
import { SignupComponent } from './components/signup/signup.component';
import { MainComponent } from './components/main/main.component';
import { VendorSignupComponent } from './components/vendor-signup/vendor-signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { AlertDialogComponent } from './components/assets/alert-dialog/alert-dialog.component';

import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import { AppProductComponent } from './components/app-product/app-product.component';
import { ReviewProductComponent } from './components/review-product/review-product.component';
import { HomeProfileComponent } from './components/home-profile/home-profile.component';
import { RouterComponentComponent } from './router-component/router-component.component';
import { RouterComponent } from './components/router/router.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddressComponent } from './components/address/address.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ReturnComponent } from './components/return/return.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CaretComponent } from './components/caret/caret.component';
import { ApiInterceptorService } from './services/api-interceptor.service';




export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    TopSliderComponent,
    CategorySliderComponent,
    HomeOffersComponent,
    ProductComponent,
    ProductFiltirationComponent,
    CategoryComponent,
    SignupComponent,
    OrdersComponent,
    AddressComponent,
    PaymentComponent,
    ReturnComponent,
    ProfileComponent,
    MainComponent,
    VendorSignupComponent,
    AlertDialogComponent,
    AppProductComponent,
    ReviewProductComponent,
    HomeProfileComponent,
    RouterComponentComponent,
    RouterComponent,
    CaretComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    // ZorroModule,
    TranslateModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,

  ],
  entryComponents:[
    AlertDialogComponent
  ],
  providers: [
    HttpClient, { provide: LocationStrategy, useClass: HashLocationStrategy },
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService , multi: true},
     

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
