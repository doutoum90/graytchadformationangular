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
    return this.http.get<Array<Etudiant>>(`${this.API}/etudiants`);
  }

  getEtudiant(id: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.API}/etudiants/${id}`);
  }


  creerEtudiant(donnees: Etudiant): Observable<Etudiant> {
    console.log(`${this.API} /etudiants/`, donnees);
    return this.http.post<Etudiant>(`${this.API}/etudiants/`, donnees);
  }

  mettreAjourEtudiant(id: string | number, donnees: Partial<Etudiant>): Observable<Etudiant> {
    console.log(id);
    return this.http.put<Etudiant>(`${this.API}/etudiants/${id}`, donnees);
  }

  supprimerEtudiant(id: number): Observable<Etudiant> {
    return this.http.delete<Etudiant>(`${this.API}/etudiants/${id}`);
  }


}
