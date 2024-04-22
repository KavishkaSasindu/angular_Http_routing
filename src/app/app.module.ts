import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrderComponent } from './components/order/order.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { NewCustomerComponent } from './components/customer/inner/new-customer/new-customer.component';
import { AllCustomerComponent } from './components/customer/inner/all-customer/all-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomerComponent,
    OrderComponent,
    NotFoundComponent,
    HomeComponent,
    NewCustomerComponent,
    AllCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
