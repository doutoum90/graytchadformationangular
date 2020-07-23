# Leçon 27 Angular

## Charger la liste des étudiants avec ngrx/store : Les Effects

### Installation

``` console
ng add @ngrx/effects
```

### Création

``` console
ng g ef etudiantdir/store/effects/etudiant --skipTests=true -m etudiantdir/etudiant.module.ts
```

### extrait d'un effects

``` typescript
loadEtudiants$ = createEffect(() =>  this.actions$.pipe(
	ofType(actions.loadEtudiants),
	mergeMap(() =>  this.etudiantService.getEtudiants().pipe(
		map(etudiants  =>  actions.loadEtudiantsSuccess({ etudiants:  etudiants })),
	catchError(() =>  of(actions.loadEtudiantsFailure({ error:  'Erreur' })))))));

loadEtudiant$ = createEffect(() =>  this.actions$.pipe(
	ofType(actions.loadEtudiant),
	concatMap((action) =>  this.etudiantService.getEtudiant(action.id).pipe(
	map(etudiant  => {
		return  actions.loadEtudiantSuccess({ etudiant:  etudiant });
	}),
	catchError(() =>  of(actions.loadEtudiantFailure({ error:  'Erreur' })))))));
```
