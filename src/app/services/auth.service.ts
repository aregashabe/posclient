import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  userRole: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:5197/api/users';

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${this.apiUrl}/login`,
      credentials,
      {
    withCredentials: true
  }
    );
  }
  getCurrentUser() {
  return this.http.get<{
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  }>(
    `${this.apiUrl}/me`,
    {
      withCredentials: true
    }
  );
}
}