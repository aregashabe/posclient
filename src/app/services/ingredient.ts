import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ingredient {
  id: number;
  name: string;
  categoryId: number;
  ingredientUnitId: number;
  alertQuantity: number;
  description: string | null;
}

export interface IngredientDto {
  name: string;
  categoryId: number;
  ingredientUnitId: number;
  alertQuantity: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:5197/api/ingredient';

  // Get all ingredients
  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.apiUrl);
  }

  // Get ingredient by ID
  getIngredientById(id: number): Observable<Ingredient> {
    return this.http.get<Ingredient>(
      `${this.apiUrl}/${id}`
    );
  }

  // Create ingredient
  createIngredient(
    ingredient: IngredientDto
  ): Observable<Ingredient> {

    return this.http.post<Ingredient>(
      this.apiUrl,
      ingredient
    );
  }

  // Update ingredient
  updateIngredient(
    id: number,
    ingredient: IngredientDto
  ): Observable<Ingredient> {

    return this.http.put<Ingredient>(
      `${this.apiUrl}/${id}`,
      ingredient
    );
  }

  // Delete ingredient
  deleteIngredient(
    id: number
  ): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );
  }
}