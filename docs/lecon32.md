## Leçon 32 Angular

## Pagination et recherche

### Pagination

le service

``` typescript
getEtudiants(numeroPage: number, capacite: number): Observable<any> {
	return  this.http.get<any>( `${environment.API}/etudiants?_page=${numeroPage}&_limit=${capacite}` ,
	{
		responseType:  'json',
		observe:  'response'
	});
}
```

dans le composant html

``` html
<nav aria-label="Page navigation example" class="d-flex justify-content-center">
    <ul *ngIf="(nombreTotal$ |async) as nb" class="pagination">
        <li class="page-item" [class.disabled]="numeroPage ===1">
            <button class="page-link" (click)="precedent()">Précedant</button>
        </li>
        <li class="page-item" *ngFor="let i of range(nb/capacite)" [class.active]="numeroPage===i">
            <button class="page-link" (click)="allerA(i)">{{i}}</button>
        </li>
        <li class="page-item" [class.disabled]="numeroPage===(nb/capacite)">
            <button class="page-link" (click)="suivant(nb)">Suivant</button>
        </li>
    </ul>
</nav>
```

dans le composant ts

``` typescript
capacite = 10;
numeroPage = 1;
nombreTotal$: Observable<number>;

ngOnInit(): void {
	this.store.dispatch(loadEtudiants());
	this.propager(this.numeroPage,  this.capacite);
	this.etudiants$ = this.store.pipe(select(selectFeatureEtudiants));
	this.nombreTotal$ = this.store.pipe(select(v => v.etudiant.nombreTotal));
}

range(fin: number) {
	return Array.from({ length: fin }, (v, k) => k + 1);
}

suivant(nb: number) {
	if (this.numeroPage < nb) {
		this.numeroPage++;
		this.propager(this.numeroPage, this.capacite);
	}
}

precedent() {
	if (this.numeroPage > 1) {
		this.numeroPage--;
		this.propager(this.numeroPage, this.capacite);
	}
}

allerA(nb: number) {
	this.numeroPage = nb;
	this.propager(this.numeroPage, this.capacite);
}

private propager(numeroPage,  capacite) {
	this.store.dispatch(loadEtudiants({ numeroPage, capacite }));
}
```

dans l'action

``` typescript

export const loadEtudiants = createAction(
	'[Etudiants] Load Etudiants'
	props<{ numeroPage: number, capacite: number }>()
);

export const loadEtudiantsSuccess = createAction(
	'[Etudiants] Load Etudiants Success',
	props<{ etudiants: Array<Etudiant>,  total: string }>()
);
```

effects

``` typescript
loadEtudiants$  =  createEffect(()  =>  
	this.actions$.pipe(
		ofType(actions.loadEtudiants),
		mergeMap((action)  =>  this.etudiantService.getEtudiants(action.numeroPage,  action.capacite)
		.pipe(
			map(etudiants  =>  actions.loadEtudiantsSuccess({  etudiants: etudiants.body,  total: etudiants.headers.get('x-total-count')  })),
			catchError(() =>  of(actions.loadEtudiantsFailure({ error:  'Erreur' })))
			)
		)
	)
);
```

dans le reducer

``` typescript
export interface EtudiantState extends EntityState<Etudiant> {
	etudiantSelectionne: Etudiant;
	error: any;
	nombreTotal: number
}
export const adapterEtudiant: EntityAdapter<Etudiant> = createEntityAdapter<Etudiant>();

export const initialState: EtudiantState = adapterEtudiant.getInitialState({
	etudiantSelectionne: undefined,
	error: undefined,
	nombreTotal: 0
});

export const reducer = createReducer(
initialState,

// charger tous étudiants
on(actions.loadEtudiantsSuccess, (state: EtudiantState, action: any) => <any>{ ...adapterEtudiant.addMany(action.etudiants, state),  nombreTotal: action.total  }),
...
);
```

### Recherche

le service

``` typescript
getEtudiantbyName(name: string, numeroPage: number, capacite: number): Observable<any> {
	return this.http.get<any>( `${environment.API}/etudiants?nom_like${name}_page=${numeroPage}&_limit=${capacite}` ,
	{
		responseType: 'json',
		observe: 'response'
	});
}
```

dans le composant html

``` html
<input #input class="form-control">
```

dans le composant ts

``` typescript
@ViewChild('input') input: ElementRef;

constructor(private readonly service: RecuperationDataService){}
ngAfterViewInit(): void {
fromEvent(this.input.nativeElement, 'keydown')
.pipe(
	debounceTime(500),
	map((data: any) =>  data.target.value),
	mergeMap(v  => this.service.getEtudiantbyName(v, this.numeroPage, this.capacite)))
	.subscribe((v: any) =>  console.log(v));

}
```
