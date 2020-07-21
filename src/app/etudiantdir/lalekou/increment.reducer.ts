import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from './increment.actions';
import { TypeINCDEC } from './typeincdec.model';

export const etatInitial: TypeINCDEC = { titre: 'Mon super titre', valeur: 0 };

export const _operations = createReducer(etatInitial,
    on(increment, etat => <any>{ ...etat, valeur: etat.valeur + 1 }),
    on(decrement, etat => <any>{ ...etat, valeur: etat.valeur - 1 }),
);

export function operations(state, action) {
    return _operations(state, action);
}