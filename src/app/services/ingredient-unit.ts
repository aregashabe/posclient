import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IngredientUnit {
  id: number;
  unitName: string;
  description: string;
}

export interface IngredientUnitDto {
  unitName: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class IngredientUnitService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:5197/api/ingunit';

  // GET all ingredient units
  getIngredientUnits(): Observable<IngredientUnit[]> {
    return this.http.get<IngredientUnit[]>(this.apiUrl);
  }

  // GET ingredient unit by ID
  getIngredientUnitById(
    id: number
  ): Observable<IngredientUnit> {

    return this.http.get<IngredientUnit>(
      `${this.apiUrl}/${id}`
    );
  }

  // POST create ingredient unit
  createIngredientUnit(
    ingredientUnit: IngredientUnitDto
  ): Observable<IngredientUnit> {

    return this.http.post<IngredientUnit>(
      this.apiUrl,
      ingredientUnit
    );
  }

  // PUT update ingredient unit
  updateIngredientUnit(
    id: number,
    ingredientUnit: IngredientUnitDto
  ): Observable<IngredientUnit> {

    return this.http.put<IngredientUnit>(
      `${this.apiUrl}/${id}`,
      ingredientUnit
    );
  }

  // DELETE ingredient unit
  deleteIngredientUnit(
    id: number
  ): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );
  }

}