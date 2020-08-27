import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Etudiant } from '../models/etudiant.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { mergeMap, switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecuperationDataService {

  constructor(private afs: AngularFirestore) { }

  getEtudiants(numeroPage: number, capacite: number): Observable<any> {
    const etudiants$ = this.afs.collection<Etudiant>('etudiants', ref => ref.orderBy('nom').startAt(numeroPage).limit(capacite))
      .valueChanges();
    const length$ = this.afs.collection('etudiants').get().pipe(switchMap(snapshot => of(snapshot.docs.length)));
    return etudiants$.pipe(
      mergeMap(etudiants => length$.pipe(map(total => <any>{ etudiants, total }))
      )
    );
  }

  getEtudiantbyName(name: string, numeroPage: number, capacite: number): Observable<any> {
    const etudiants$ = this.afs.collection<Etudiant>('etudiants', ref => ref.where('nom', '==', name).orderBy('nom').startAt(numeroPage).limit(capacite))
      .valueChanges();
    const length$ = this.afs.collection('etudiants').get().pipe(switchMap(snapshot => of(snapshot.docs.length)));
    return etudiants$.pipe(
      mergeMap(etudiants => length$.pipe(map(total => <any>{ etudiants, total }))
      )
    );
  }

  getEtudiant(id: string): Observable<Etudiant> {
    return this.afs.doc<Etudiant>(`etudiants/${id}`).valueChanges();
  }


  creerEtudiant(donnees: Etudiant) {
    const newid = this.afs.createId();
    this.afs.collection('etudiants').doc(newid).set({ ...donnees, id: newid });
    return this.afs.collection('etudiants', ref => ref.where('id', '==', newid)).valueChanges();
  }

  mettreAjourEtudiant(id: string | number, donnees: Partial<Etudiant>): Observable<Etudiant> {
    this.afs.doc<Etudiant>(`etudiants/${id}`).set({
      nom: donnees.nom,
      prenom: donnees.prenom,
      age: donnees.age,
      dateNaissance: donnees.dateNaissance,
      fraisSubsistance: donnees.fraisSubsistance,
      note: donnees.note
    });
    return this.afs.doc<Etudiant>(`etudiants/${id}`).valueChanges();
  }

  supprimerEtudiant(id: string): Observable<Etudiant> {
    this.afs.doc<Etudiant>(`etudiants/${id}`).delete();
    return this.afs.doc<Etudiant>(`etudiants/${id}`).valueChanges();
  }

}
