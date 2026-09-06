import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PosOrderService {

  private apiUrl = 'http://localhost:5197/api/posorders';

  constructor(private http: HttpClient) {}

  createOrder(order: any) {
    return this.http.post<any>(this.apiUrl, order);
  }

  getOrders() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getOrder(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deleteOrder(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}