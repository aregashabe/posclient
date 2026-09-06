import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Table {
  id: number;
  tableName: string;
  position: string;
  seatCapacity: string;
  description: string;
}

export interface TableDto {
  tableName: string;
  position: string;
  seatCapacity: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:5197/api/tables';

  getTables(): Observable<Table[]> {
    return this.http.get<Table[]>(this.apiUrl);
  }

  getTableById(id: number): Observable<Table> {
    return this.http.get<Table>(`${this.apiUrl}/${id}`);
  }

  createTable(table: TableDto): Observable<Table> {
    return this.http.post<Table>(this.apiUrl, table);
  }

  updateTable(id: number, table: TableDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, table);
  }

  deleteTable(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}