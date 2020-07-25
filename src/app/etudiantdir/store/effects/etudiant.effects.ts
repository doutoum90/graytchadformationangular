import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions/etudiants.actions';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { RecuperationDataService } from 'src/app/services/recuperation-data.service';



@Injectable()
export class EtudiantEffects {

  loadEtudiants$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadEtudiants),
    mergeMap(() => this.etudiantService.getEtudiants()
      .pipe(
        map(etudiants => actions.loadEtudiantsSuccess({ etudiants: etudiants })),
        catchError(() => of(actions.loadEtudiantsFailure({ error: 'Erreur' })))
      ))
  )
  );

  loadEtudiant$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadEtudiant),
    concatMap((action) => this.etudiantService.getEtudiant(action.id)
      .pipe(
        map(etudiant =>actions.loadEtudiantSuccess({ etudiantSelectionne: etudiant })),
        catchError(() => of(actions.loadEtudiantFailure({ error: 'Erreur' })))
      ))
  )
  );

  constructor(private actions$: Actions,
    private readonly etudiantService: RecuperationDataService) { }

}
