import { Action, createReducer, on } from '@ngrx/store';
import { incrementer, decrementer } from '../actions/etudiants.actions'
import { TypeINCDEC } from '../../lalekou/typeincdec.model';


export const etudiantFeatureKey = 'etudiant';
export const initialState: TypeINCDEC = {
  titre: "Lalekou Gray tchad",
  valeur: 0
};


export const reducer = createReducer(
  initialState,
  on(incrementer, (state: TypeINCDEC, action: any) => <any>{ ...state, valeur: state.valeur + action.valeur }),
  on(decrementer, (state: TypeINCDEC, action: any) => <any>{ ...state, valeur: state.valeur - action.valeur })

);

