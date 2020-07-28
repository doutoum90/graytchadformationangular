import { createAction, props } from '@ngrx/store';

export const loadUserss = createAction(
  '[Users] Load Userss'
);

export const loadUserssSuccess = createAction(
  '[Users] Load Userss Success',
  props<{ data: any }>()
);

export const loadUserssFailure = createAction(
  '[Users] Load Userss Failure',
  props<{ error: any }>()
);
