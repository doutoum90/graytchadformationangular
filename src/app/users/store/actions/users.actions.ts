import { createAction, props } from '@ngrx/store';
import { User } from '../../../models/user.model';

export const createUser = createAction(
  '[Users]  create User',
  props<{ user: User }>()
);

export const createUserSuccess = createAction(
  '[Users]  create User Success',
  props<{ user: User }>()
);

export const createUserFailure = createAction(
  '[Users]  create User Failure',
  props<{ erreur: any }>()
);

export const authenticateUser = createAction(
  '[Users]  authenticate User',
  props<{ username: string, password: string | Int32Array }>()
);

export const authenticateUserSuccess = createAction(
  '[Users]  authenticate User Success',
  props<{ users: User[] }>()
);

export const authenticateUserFailure = createAction(
  '[Users]  authenticate User Failure',
  props<{ erreur: any }>()
);


export const changePassword = createAction(
  '[Users]  change password User',
  props<{ username: string, password: string | Int32Array }>()
);

export const changePasswordFailure = createAction(
  '[Users]  change password User Failure',
  props<{ erreur: any }>()
);
