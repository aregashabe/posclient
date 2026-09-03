import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Delivery {
  id: number;
  deliveryName: string;
  deliveryMobile: string;
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  private apiUrl = 'http://localhost:5197/api/deliveries';

  constructor(private http: HttpClient) {}

  // ADD DELIVERY
  addDelivery(delivery: {
    deliveryName: string;
    deliveryMobile: string;
  }): Observable<Delivery> {

    return this.http.post<Delivery>(
      this.apiUrl,
      delivery,
      {
        withCredentials: true
      }
    );
  }

  // GET ALL DELIVERIES
  getDeliveries(): Observable<Delivery[]> {

    return this.http.get<Delivery[]>(
      this.apiUrl,
      {
        withCredentials: true
      }
    );
  }

  // GET ONE DELIVERY
  getDelivery(id: number): Observable<Delivery> {

    return this.http.get<Delivery>(
      `${this.apiUrl}/${id}`,
      {
        withCredentials: true
      }
    );
  }

  // DELETE DELIVERY
  deleteDelivery(id: number): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${id}`,
      {
        withCredentials: true
      }
    );
  }
}