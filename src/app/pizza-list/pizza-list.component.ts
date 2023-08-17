import { Component, OnInit } from '@angular/core';
import { Pizza } from '../model/pizza';
import { PizzaService } from '../pizza.service';


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzas: Pizza[] | undefined;

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.pizzaService.getPizzas()
    .subscribe(res => {
      this.pizzas = res;

      console.log(this.pizzas)
    });

 
  }

  
}
