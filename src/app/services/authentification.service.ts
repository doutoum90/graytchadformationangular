import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(private http: HttpClient) { }

  connect(user: User) {
    localStorage.setItem('connecter', 'true');
    localStorage.setItem('user', JSON.stringify(user));
  }

  disconnect() {
    localStorage.removeItem('connecter');
    localStorage.removeItem('user');
  }

  connexion(username: string, password: string | Int32Array): Observable<User[]> {
    return this.http.get<User[]>(`${environment.API}/users?username=${username}&password=${password}`);
  }
  getUserByUsername(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${environment.API}/users?username=${username}`);
  }
  inscription(user: User): Observable<User> {
    return this.http.post<User>(`${environment.API}/users`, user);
  }
  modifierMdp(id: number | string, user: User): Observable<User> {
    return this.http.put<User>(`${environment.API}/users/${id}`, user)
  }
}
