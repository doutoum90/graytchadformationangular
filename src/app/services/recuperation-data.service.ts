import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Etudiant } from '../etudiantdir/lalekou/lalekou.component';

@Injectable({
  providedIn: 'root'
})
export class RecuperationDataService {
  private etudiants = <Array<Etudiant>>[
    { id: 1, nom: 'ISSA', prenom: { prenom1: 'Daoud', prenom2: 'Mahamat' }, age: 25 },
    { id: 2, nom: 'AHMAT', age: 25 },
    { id: 3, nom: 'IDRIS', prenom: { prenom1: 'ALI', prenom2: 'MAHMOUD' }, age: 25 },
    { id: 4, nom: 'MOUSSA', prenom: { prenom1: 'Daoud' }, age: 25 }
  ];
  constructor() { }

  getEtudiants(): Observable<Array<Etudiant>> {
    return of(this.etudiants);
  }

  getEtudiant(id: number): Observable<Etudiant> {
    console.log(id, this.etudiants.find(etudiant => etudiant.id === id));
    return of(this.etudiants.find(etudiant => etudiant.id === id));
  }
}
