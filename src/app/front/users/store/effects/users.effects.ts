import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions/users.actions'
import { AuthentificationService } from 'src/app/services/authentification.service';
import { concatMap, map, catchError, tap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';



@Injectable()
export class UsersEffects {

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.createUser),
      concatMap((action) => this.userService.inscription(action.user)
        .pipe(
          map((user: User) => fromActions.createUserSuccess({ user })),
          catchError(() => of(fromActions.createUserFailure({ erreur: 'Erreur' })))
        )
      ),
      tap(() => this.router.navigate(['/users/connexion']))
    )
  );
  authenticateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.authenticateUser),
      concatMap((action) => this.userService.connexion(action.username, action.password)
        .pipe(
          map((users: User[]) => {
            if (users.length == 0) {
              return fromActions.authenticateUserFailure({ erreur: 'erreurConnexion' });
            } else {
              return fromActions.authenticateUserSuccess({ users });
            }
          }),
          catchError(() => of(fromActions.authenticateUserFailure({ erreur: 'Erreur' })))
        )
      ),
      tap((action: any) => {
        if (action.erreur !== 'erreurConnexion') {
          this.userService.connect(action.users[0]);
          this.router.navigate(['list']);
        }
      })
    )
  );

  changePassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.changePassword),
      concatMap((action) => this.userService.getUserByUsername(action.username)
        .pipe(
          mergeMap((users: User[]) => {
            if (users.length == 0) {
              return of(fromActions.changePasswordFailure({ erreur: 'erreurChangement' }));
              // mot de passe ou username incorrect
            } else {
              return this.userService.modifierMdp(users[0].id, { username: action.username, password: action.password });
            }
          }),
          catchError(() => of(fromActions.changePasswordFailure({ erreur: 'Erreur' })))
        )
      ),
      tap((action: any) => {
        if (action.erreur !== 'erreurConnexion') {
          this.userService.disconnect();
          this.router.navigate(['users/connexion']);
        }
      })
    ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly userService: AuthentificationService,
    private readonly router: Router) { }

}
