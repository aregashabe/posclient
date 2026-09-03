import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Foodmenu } from '../models/foodmenu';
@Injectable({
  providedIn: 'root',
})
export class FoodmenuService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:5197/api/foodmenu';

  getFoodmenus() {
    return this.http.get<Foodmenu[]>(this.apiUrl);
  }

  addFoodmenu(foodmenu: Omit<Foodmenu, 'id'>) {
    return this.http.post<Foodmenu>(this.apiUrl, foodmenu);
  }

  updateFoodmenu(foodmenu: Foodmenu) {
    const url = `${this.apiUrl}/${foodmenu.id}`;
    return this.http.put<Foodmenu>(url, foodmenu);
  }
  
  deleteFoodmenu(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
