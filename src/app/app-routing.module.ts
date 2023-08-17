import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { ToppingListComponent } from './topping-list/topping-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  { path: 'pizzas', component: PizzaListComponent },
  {path:'',redirectTo:'pizzas', pathMatch:'full'},
  { path: 'toppings', component: ToppingListComponent },
  { path: 'orders/:id', component: OrderDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
