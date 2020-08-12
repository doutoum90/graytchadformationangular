import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions/etudiants.actions';
import { mergeMap, map, catchError, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { RecuperationDataService } from 'src/app/services/recuperation-data.service';
import { Router } from '@angular/router';



@Injectable()
export class EtudiantEffects {

  loadEtudiants$ = createEffect(() => 
    this.actions$.pipe(
      ofType(actions.loadEtudiants),
      mergeMap((action) => this.etudiantService.getEtudiants(action.numeroPage, action.capacite)
        .pipe(
          map(etudiants => actions.loadEtudiantsSuccess({ etudiants: etudiants.body.map(et => <any>{...et, id: et['_id']}), total: etudiants.headers.get('x-total-count') })),
          catchError(() => of(actions.loadEtudiantsFailure({ error: 'Erreur' })))
        )
      )
    )
  );

  loadEtudiant$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadEtudiant),
    concatMap((action) => this.etudiantService.getEtudiant(action.id)
      .pipe(
        map(etudiantSelectionne => actions.loadEtudiantSuccess({ etudiantSelectionne })),
        catchError(() => of(actions.loadEtudiantFailure({ error: 'Erreur' })))
      ))
  )
  );

  createEtudiant$ = createEffect(() => this.actions$.pipe(
    ofType(actions.createEtudiant),
    concatMap((action) => this.etudiantService.creerEtudiant(action.etudiant)
      .pipe(
        map(etudiant => actions.createEtudiantSuccess({ etudiant })),
        catchError(() => of(actions.createEtudiantFailure({ error: 'Erreur' })))
      )
    ),
    tap(() => this.router.navigate(['list']))
  ),

  );


  updateEtudiant$ = createEffect(() => this.actions$.pipe(
    ofType(actions.updateEtudiant),
    concatMap((action) => this.etudiantService.mettreAjourEtudiant(action.etudiant.id, action.etudiant.changes)),
    tap(() => this.router.navigate(['list']))
  ),
    { dispatch: false }
  );

  deleteEtudiant$ = createEffect(() => this.actions$.pipe(
    ofType(actions.deleteEtudiant),
    concatMap((action) => this.etudiantService.supprimerEtudiant(action.id)
      .pipe(
        map((data) => actions.deleteEtudiantSuccess({ data })),
        catchError(() => of(actions.deleteEtudiantFailure({ error: 'Erreur' })))
      ))
  )
  );

  constructor(private actions$: Actions,
    private readonly etudiantService: RecuperationDataService,
    private readonly router: Router) { }

}
