# Leçon 28 Angular

## Optimisation des types avec [les entités:  @ngrx/entity](https://ngrx.io/guide/entity)

### Installation

``` console
ng add @ngrx/entity
```

dans le reducer

``` typescript
export interface EtudiantState extends  EntityState<Etudiant> {
	etudiantSelectionne: Etudiant;
	error: any;
}
export const adapterEtudiant: EntityAdapter<Etudiant> = createEntityAdapter<Etudiant>();
export const initialState: EtudiantState = adapterEtudiant.getInitialState({
	etudiantSelectionne: undefined,
	error: undefined
});
  
export  const  reducer = createReducer(
	initialState,
	on(actions.loadEtudiantsSuccess,
		(state: EtudiantState, action: any) =>  adapterEtudiant.addAll(action.etudiants, state)),

	on(actions.loadEtudiantsFailure,
		(state: EtudiantState, action: any) => <any>{ ...state, error:  action.error }),

	on(actions.loadEtudiantSuccess,
		(state: EtudiantState, action: any) => <any>{ ...state, etudiantSelectionne:  action.etudiantSelectionne }),
	on(actions.loadEtudiantFailure,
		(state: EtudiantState, action: any) => <any>{ ...state, error:  action.error })
);
export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = adapterEtudiant.getSelectors();
```

dans le selecteur

``` typescript
export const etudiantsSelecteurFeature = createFeatureSelector<EtudiantState>(etudiantFeatureKey);

export const selectFeatureEtudiants = createSelector(
	etudiantsSelecteurFeature,
	selectAll
);
export const selectFeatureEtudiant = createSelector(
	etudiantsSelecteurFeature,
	(state: EtudiantState) =>  state.etudiantSelectionne
);
```

dans les composant

``` typescript
// charger les etudiants et les afficher
this.store.dispatch(loadEtudiants());
this.etudiant$ = this.store.pipe(select(selectFeatureEtudiant));
```

``` typescript
// charger un etudiant et l'afficher
this.store.dispatch(loadEtudiant({ id:  Number(this.activated.snapshot.params.id) }));
this.etudiants$ = this.store.pipe(select(selectFeatureEtudiants));
```
