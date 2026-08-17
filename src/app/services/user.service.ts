import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateUser } from '../models/user';
export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  userRole: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:5197/api/users';

 createUser(user: CreateUser): Observable<any> {
  return this.http.post(this.apiUrl, user, {
    withCredentials: true
  });
}
  getAllUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.apiUrl, {
    withCredentials: true
  });
}
}