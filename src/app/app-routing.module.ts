import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import {CustomerComponent} from "./components/customer/customer.component";
import {OrderComponent} from "./components/order/order.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {HomeComponent} from "./components/home/home.component";
import * as path from "path";
import {NewCustomerComponent} from "./components/customer/inner/new-customer/new-customer.component";
import {AllCustomerComponent} from "./components/customer/inner/all-customer/all-customer.component";

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "product/:id", component: ProductComponent},
  {
    path: "customer", component: CustomerComponent, children: [
      {path:"new",component:NewCustomerComponent},
      {path:"all",component:AllCustomerComponent}
    ]
  },
  {path: "order", component: OrderComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
