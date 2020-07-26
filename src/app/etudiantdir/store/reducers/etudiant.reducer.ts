import { Action, createReducer, on, State } from '@ngrx/store';
import { Etudiant } from 'src/app/models/etudiant.model';
import * as actions from '../actions/etudiants.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const etudiantFeatureKey = 'etudiant';
export interface EtudiantState extends EntityState<Etudiant> {
  etudiantSelectionne: Etudiant;
  error: any;
}
export const adapterEtudiant: EntityAdapter<Etudiant> = createEntityAdapter<Etudiant>();
export const initialState: EtudiantState = adapterEtudiant.getInitialState({
  etudiantSelectionne: undefined,
  error: undefined
});


export const reducer = createReducer(
  initialState,
  // charger tous étudiants
  on(actions.loadEtudiantsSuccess,
    (state: EtudiantState, action: any) => adapterEtudiant.addAll(action.etudiants, state)),
  on(actions.loadEtudiantsFailure,
    (state: EtudiantState, action: any) => <any>{ ...state, error: action.error }),
  // charger un étudiant
  on(actions.loadEtudiantSuccess,
    (state: EtudiantState, action: any) => <any>{ ...state, etudiantSelectionne: action.etudiantSelectionne }),
  on(actions.loadEtudiantFailure,
    (state: EtudiantState, action: any) => <any>{ ...state, error: action.error }),
  // creer un étudiant

  on(actions.createEtudiantSuccess,
    (state: EtudiantState, action: any) => adapterEtudiant.addOne(action.etudiants, state)),
  on(actions.createEtudiantSuccess,
    (state: EtudiantState, action: any) => <any>{ ...state, error: action.error }),
  // mettre à jour un étudiant

  on(actions.createEtudiantSuccess,
    (state: EtudiantState, action: any) => state),
  on(actions.createEtudiantSuccess,
    (state: EtudiantState, action: any) => <any>{ ...state, error: action.error }),

  // supprimer un étudiant

  on(actions.createEtudiantSuccess,
    (state: EtudiantState, action: any) => state),
  on(actions.createEtudiantSuccess,
    (state: EtudiantState, action: any) => <any>{ ...state, error: action.error })
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapterEtudiant.getSelectors();

