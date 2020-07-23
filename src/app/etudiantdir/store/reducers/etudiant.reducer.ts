import { Action, createReducer, on, State } from '@ngrx/store';
import { Etudiant } from 'src/app/models/etudiant.model';
import * as actions from '../actions/etudiants.actions';


export const etudiantFeatureKey = 'etudiant';
export interface EtudiantState {
  etudiants: Array<Etudiant>;
  etudiant: Etudiant;
  error: any;
}
export const initialState: EtudiantState = {
  etudiants: undefined,
  etudiant: undefined,
  error: undefined
};


export const reducer = createReducer(
  initialState,
  on(actions.loadEtudiantsSuccess, (state: EtudiantState, action: any) => <any>{ ...state, etudiants: action.etudiants }),
  on(actions.loadEtudiantsFailure, (state: EtudiantState, action: any) => <any>{ ...state, error: action.error }),
  on(actions.loadEtudiantSuccess, (state: EtudiantState, action: any) => <any>{ ...state, etudiant: action.etudiant }),
  on(actions.loadEtudiantFailure, (state: EtudiantState, action: any) => <any>{ ...state, error: action.error })
);

