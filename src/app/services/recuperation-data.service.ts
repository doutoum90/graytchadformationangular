import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Etudiant } from '../models/etudiant.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecuperationDataService {
  API = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getEtudiants(): Observable<Array<Etudiant>> {
    return this.http.get<Array<Etudiant>>(this.API + '/etudiants');
  }

  getEtudiant(id: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(this.API + '/etudiants/' + id);
  }
}
