
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Vat {
  id: number;
  vatName: string;
  percentage: string;
}

export interface VatDto {
  vatName: string;
  percentage: string;
}

@Injectable({
  providedIn: 'root'
})
export class VatService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:5197/api/Vat';

  getVats(): Observable<Vat[]> {
    return this.http.get<Vat[]>(this.apiUrl);
  }

  getVatById(id: number): Observable<Vat> {
    return this.http.get<Vat>(`${this.apiUrl}/${id}`);
  }

  createVat(vat: VatDto): Observable<Vat> {
    return this.http.post<Vat>(this.apiUrl, vat);
  }

  updateVat(id: number, vat: VatDto): Observable<Vat> {
    return this.http.put<Vat>(`${this.apiUrl}/${id}`, vat);
  }

  deleteVat(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

