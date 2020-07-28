import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions/users.actions'
import { AuthentificationService } from 'src/app/services/authentification.service';
import { concatMap, map, catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { of } from 'rxjs';
import { Router } from '@angular/router';



@Injectable()
export class UsersEffects {

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.createUser),
      concatMap((action) => this.userService.inscription(action.user)
        .pipe(
          map((user: User) => fromActions.createUserSuccess({ user })),
          catchError(() => of(fromActions.createUserFailure({ error: 'Erreur' })))
        )
      ),
      tap(() => this.router.navigate(['/users/connexion']))
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly userService: AuthentificationService,
    private readonly router: Router) { }

}
