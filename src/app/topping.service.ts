import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topping } from './model/topping';


@Injectable({
  providedIn: 'root'
})
export class ToppingService {
  private baseUrl = 'http://localhost:8080/api/pizzas';

  constructor(private http: HttpClient) { }

  getToppings(): Observable<Topping[]> {
    return this.http.get<Topping[]>(`${this.baseUrl}/api/toppings`);
  }
}
