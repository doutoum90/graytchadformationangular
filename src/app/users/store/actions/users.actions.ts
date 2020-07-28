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
  props<{ error: any }>()
);
