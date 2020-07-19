import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Etudiant } from '../models/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class RecuperationDataService {
  private etudiants = <Array<Etudiant>>[
    {
      id: 1, nom: 'ISSA',
      prenom: { prenom1: 'Daoud', prenom2: 'Mahamat' },
      age: 25,
      dateNaissance: new Date('01/01/1992'),
      fraisSubsistance: 100000,
      note: 0.8
    },
    {
      id: 2,
      nom: 'AHMAT',
      age: 25,
      dateNaissance: new Date('01/01/1996'),
      fraisSubsistance: 100000,
      note: 0.7
    },
    {
      id: 3,
      nom: 'IDRISS',
      prenom: { prenom1: 'ALI', prenom2: 'MAHMOUD' },
      age: 25,
      dateNaissance: new Date('01/01/2000'),
      fraisSubsistance: 10000000,
      note: 0.9
    },
    {
      id: 4,
      nom: 'MOUSSA',
      prenom: { prenom1: 'Daoud' },
      age: 25,
      dateNaissance: new Date('01/01/1994'),
      fraisSubsistance: 100000,
      note: 0.4
    }
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
