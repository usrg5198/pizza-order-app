import { Component, OnInit } from '@angular/core';
import { Topping } from '../model/topping';
import { ToppingService } from '../topping.service';


@Component({
  selector: 'app-topping-list',
  templateUrl: './topping-list.component.html',
  styleUrls: ['./topping-list.component.css']
})
export class ToppingListComponent implements OnInit {
  toppings: Topping[] | undefined;

  constructor(private toppingService: ToppingService) { }

  ngOnInit(): void {
    this.toppingService.getToppings().subscribe(toppings => {
      this.toppings = toppings;
    });
  }
}
