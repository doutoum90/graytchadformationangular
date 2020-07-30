import { createAction, props, } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Etudiant } from 'src/app/front/models/etudiant.model';
// charger tout les etudiants
export const loadEtudiants = createAction(
  '[Etudiants] Load Etudiants',
  props<{ numeroPage: number, capacite: number }>()
);

export const loadEtudiantsSuccess = createAction(
  '[Etudiants] Load Etudiants Success',
  props<{ etudiants: Array<Etudiant>, total: string }>()
);

export const loadEtudiantsFailure = createAction(
  '[Etudiants] Load Etudiants Failure',
  props<{ error: any }>()
);

// charger un etudiant
export const loadEtudiant = createAction(
  '[Etudiants] Load one Etudiants',
  props<{ id: number }>()
);

export const loadEtudiantSuccess = createAction(
  '[Etudiants] Load one Etudiants Success',
  props<{ etudiantSelectionne: Etudiant }>()
);

export const loadEtudiantFailure = createAction(
  '[Etudiants] Load one Etudiants Failure',
  props<{ error: any }>()
);

// creer un etudiant
export const createEtudiant = createAction(
  '[Etudiants] create one Etudiant',
  props<{ etudiant: Etudiant }>()
);

export const createEtudiantSuccess = createAction(
  '[Etudiants] create one Etudiants Success',
  props<{ etudiant: Etudiant }>()
);

export const createEtudiantFailure = createAction(
  '[Etudiants] create one  Etudiants Failure',
  props<{ error: any }>()
);

// mettre à jour un etudiant
export const updateEtudiant = createAction(
  '[Etudiants] update one Etudiant',
  props<{ etudiant: Update<Etudiant> }>()
);

// supprimer un etudiant
export const deleteEtudiant = createAction(
  '[Etudiants] delete one Etudiant',
  props<{ id: number }>()
);

export const deleteEtudiantSuccess = createAction(
  '[Etudiants] delete one Etudiants Success',
  props<{ data: any }>()
);

export const deleteEtudiantFailure = createAction(
  '[Etudiants] delete one  Etudiants Failure',
  props<{ error: any }>()
);


