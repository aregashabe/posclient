import { Injectable,inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, CreateCategory } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5197/api/category';
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
 addCategory(category: CreateCategory) {
  return this.http.post<Category>(
    this.apiUrl,
    category
  );
}
  updateCategory(category: Category): Observable<Category> {
    const url = `${this.apiUrl}/${category.id}`;
    return this.http.put<Category>(url, category);
  }
  deleteCategory(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
