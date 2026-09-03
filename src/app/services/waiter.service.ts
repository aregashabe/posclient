import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Waiter {
  id: number;
  waitername: string;
  designation: string;
  mobile: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class WaiterService {

  private apiUrl = 'http://localhost:5197/api/waiters';

  constructor(private http: HttpClient) {}

  getWaiters(): Observable<Waiter[]> {
    return this.http.get<Waiter[]>(
      this.apiUrl,
      {
        withCredentials: true
      }
    );
  }

  getWaiter(id: number): Observable<Waiter> {
    return this.http.get<Waiter>(
      `${this.apiUrl}/${id}`,
      {
        withCredentials: true
      }
    );
  }

  addWaiter(waiter: {
    waitername: string;
    designation: string;
    mobile: string;
    description: string;
  }): Observable<Waiter> {

    return this.http.post<Waiter>(
      this.apiUrl,
      waiter,
      {
        withCredentials: true
      }
    );
  }

  deleteWaiter(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/${id}`,
      {
        withCredentials: true
      }
    );
  }
}