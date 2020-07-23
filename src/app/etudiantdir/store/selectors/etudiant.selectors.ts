import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Etudiant } from 'src/app/models/etudiant.model';
import { EtudiantState } from '../reducers/etudiant.reducer';

export interface EtudiantsFeature {
    etudiant: EtudiantState;
}



export const etudiantsSelecteurFeature = (state: EtudiantsFeature) => state.etudiant;

export const selectFeatureEtudiants = createSelector(
    etudiantsSelecteurFeature,
    (state: EtudiantState) => state.etudiants
);

export const selectFeatureEtudiant = createSelector(
    etudiantsSelecteurFeature,
    (state: EtudiantState) => state.etudiant
);
