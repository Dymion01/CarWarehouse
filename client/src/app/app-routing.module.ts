import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'', redirectTo:'cars', pathMatch:'full'},
  {path:'cars', component: CarsListComponent },
  {path:'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
