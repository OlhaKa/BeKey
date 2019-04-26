import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './userModel';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }

  getUserProfile(id: string): Observable<User> {
    return this.http.get<User>(this.url + '?_id=' + id);
  }

  createUser(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<User>(this.url, user, { headers: headers, observe: 'body' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(this.url + '/' + id, {observe: 'response'});
  }
}
