import { createAction, props } from '@ngrx/store';

/* export const loadEtudiantss = createAction(
  '[Etudiants] Load Etudiantss'
);

export const loadEtudiantssSuccess = createAction(
  '[Etudiants] Load Etudiantss Success',
  props<{ data: any }>()
);

export const loadEtudiantssFailure = createAction(
  '[Etudiants] Load Etudiantss Failure',
  props<{ error: any }>()
);
 */

export const incrementer = createAction(
  '[Compteur] incrementer',
  props<{ valeur: number }>()
);
export const decrementer = createAction(
  '[Compteur] decrementer',
  props<{ valeur: number }>()
);