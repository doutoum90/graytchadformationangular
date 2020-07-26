import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Etudiant } from '../models/etudiant.model';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecuperationDataService {

  constructor(private http: HttpClient) { }

  getEtudiants(): Observable<Array<Etudiant>> {
    return this.http.get<Array<Etudiant>>(`${environment.API}/etudiants`);
  }

  getEtudiant(id: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${environment.API}/etudiants/${id}`);
  }


  creerEtudiant(donnees: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(`${environment.API}/etudiants/`, donnees);
  }

  mettreAjourEtudiant(id: string | number, donnees: Partial<Etudiant>): Observable<Etudiant> {
    return this.http.put<Etudiant>(`${environment.API}/etudiants/${id}`, donnees);
  }

  supprimerEtudiant(id: number): Observable<Etudiant> {
    return this.http.delete<Etudiant>(`${environment.API}/etudiants/${id}`);
  }


}
