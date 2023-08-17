
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pizza } from './model/pizza';
//import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  // getPizzas(): Observable<Pizza[]> {
  //   return this.http.get<Pizza[]>(this.apiUrl+'getAllPizzas');

  // }

  getPizzas(){
    return this.http.get<any>(this.apiUrl+'getAllPizzas')
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  // Implement other methods for CRUD operations
}