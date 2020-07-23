import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TypeINCDEC } from '../../lalekou/typeincdec.model';

export interface EtudiantFeature {
    etudiant: TypeINCDEC;
}

export const etudiantSelecteurFeature = (state: EtudiantFeature) => state.etudiant;

export const selectFeatureEtudiant = createSelector(
    etudiantSelecteurFeature,
    (state: TypeINCDEC) => state
);
