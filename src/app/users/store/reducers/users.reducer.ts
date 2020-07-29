import { Action, createReducer, on, State } from '@ngrx/store';

import { User } from '../../../models/user.model';
import * as fromActions from '../actions/users.actions';

export const usersFeatureKey = 'users';
export interface UsersFeature {
  users: UserState;
}

export interface UserState {
  user: User;
  users: User[];
  erreur: any;
}

export const initialState: UserState = {
  user: undefined,
  users: undefined,
  erreur: undefined
};


export const reducer = createReducer(
  initialState,
  on(fromActions.createUserSuccess, (state: UserState, action: { user: User }) => <UserState>{
    ...state, user: action.user
  }),

  on(fromActions.createUserFailure, (state: UserState, action: { erreur: any }) => <UserState>{
    ...state, erreur: action.erreur
  }),

  on(fromActions.authenticateUserSuccess, (state: UserState, action: { users: User[] }) => <UserState>{
    ...state, users: action.users
  }),

  on(fromActions.authenticateUserFailure, (state: UserState, action: { erreur: any }) => <UserState>{
    ...state, erreur: action.erreur
  }),
  on(fromActions.changePasswordFailure, (state: UserState, action: { erreur: any }) => <UserState>{
    ...state, erreur: action.erreur
  }),




);

