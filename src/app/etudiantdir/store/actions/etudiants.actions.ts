import { createAction, props } from '@ngrx/store';
import { Etudiant } from 'src/app/models/etudiant.model';

export const loadEtudiants = createAction(
  '[Etudiants] Load Etudiants'
);

export const loadEtudiantsSuccess = createAction(
  '[Etudiants] Load Etudiants Success',
  props<{ etudiants: Array<Etudiant> }>()
);

export const loadEtudiantsFailure = createAction(
  '[Etudiants] Load Etudiants Failure',
  props<{ error: any }>()
);


export const loadEtudiant = createAction(
  '[Etudiants] Load one Etudiants',
  props <{ id:number }>()
);

export const loadEtudiantSuccess = createAction(
  '[Etudiants] Load one Etudiants Success',
  props<{ etudiant: Etudiant}>()
);

export const loadEtudiantFailure = createAction(
  '[Etudiants] Load one Etudiants Failure',
  props<{ error: any }>()
);

