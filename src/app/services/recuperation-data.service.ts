import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Etudiant } from '../models/etudiant.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecuperationDataService {

  constructor(private http: HttpClient) { }

  getEtudiants(numeroPage: number, capacite: number): Observable<any> {
    return this.http.get<any>(`${environment.API}/etudiants?_page=${numeroPage}&_limit=${capacite}`,
      {
        responseType: 'json',
        observe: 'response'
      });
  }

  getEtudiantbyName(name: string, numeroPage: number, capacite: number): Observable<any> {
    return this.http.get<any>(`${environment.API}/etudiants?nom_like${name}_page=${numeroPage}&_limit=${capacite}`,
      {
        responseType: 'json',
        observe: 'response'
      });
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
