import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EtudiantState, selectAll, etudiantFeatureKey } from '../reducers/etudiant.reducer';

export interface EtudiantsFeature {
    etudiant: EtudiantState;
}

export const etudiantsSelecteurFeature = createFeatureSelector<EtudiantState>(etudiantFeatureKey);

export const selectFeatureEtudiants = createSelector(
    etudiantsSelecteurFeature,
    selectAll
);

export const selectFeatureEtudiant = createSelector(
    etudiantsSelecteurFeature,
    (state: EtudiantState) => state.etudiantSelectionne
);
