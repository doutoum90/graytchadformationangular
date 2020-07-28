import { Action, createReducer, on, State } from '@ngrx/store';

import { User } from '../../../models/user.model';
import * as fromActions from '../actions/users.actions';

export const usersFeatureKey = 'users';
export interface UsersFeature {
  users: UserState;
}

export interface UserState {
  user: User;
  error: any;
}

export const initialState: UserState = {
  user: undefined,
  error: undefined
};


export const reducer = createReducer(
  initialState,
  on(fromActions.createUserSuccess, (state: UserState, action: { user: User }) => <UserState>{
    ...state, users: action.user
  }),

  on(fromActions.createUserFailure, (state: UserState, action: { error: any }) => <UserState>{
    ...state, error: action.error
  }),


);

