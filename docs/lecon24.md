# Leçon 24 Angular

## [ Programmation réactive avec ngrx/store](https://ngrx.io)

***installation du modules***

``` console
npm install @ngrx/store --save
```

***initialisation du modules***

``` typescript
import { StoreModule } from  '@ngrx/store';
...
imports: [
	StoreModule.forRoot({ compter:  operations })
	// operation: est le reducer
]
...
```

1- Action 

version1:

``` typescript
export enum TypeAction{
	increment = '[compteur] INCREMENTER',
	decrement = '[compteur] DECREMENTER'
}
```

version2: 

``` typescript
import { createAction, createReducer, on } from  '@ngrx/store';
export  const  increment = createAction('[compteur] INCREMENTER');
export  const  decrement = createAction('[compteur] DECREMENTER');
```

2- le store: une sorte de base de donnée (dans le composant)
version 1:

``` typescript
element$;
constructor(private readonly store: Store<{compter: TypeINCDEC}>) { }
ngOnInit(): void {
	this.element$ = this.store.pipe(select('compter'));
}
incrementer() {
	this.store.dispatch(increment());
}
decrementer() {
	this.store.dispatch(decrement());
}
```

version 2:

``` typescript
element$;
constructor(private readonly store: Store<{compter: TypeINCDEC}>) { }
ngOnInit(): void {
	this.element$ = this.store.pipe(select('compter'));
}
incrementer() {
	this.store.dispatch({type:TypeAction.increment, payload : 1});
}
decrementer() {
	this.store.dispatch({type:TypeAction.decrement, payload : 2});
}
```

``` html
<p *ngIf="(element$ | async) as element"> {{element.titre}}: {{element.valeur}}</p>
<button (click)="incrementer()">incrementer</button>
<button (click)="decrementer()">decrementer</button>
```

3- Reducer: Une fonction qui permet de changer d'etat
version 1: reducer

``` typescript
export interface TypeINCDEC {
	titre: string;
	valeur: number;
}
export  const  etatInitial: TypeINCDEC = { titre:  'Mon super titre', valeur:  0 };
export function operations(etat = etatInitial, action: { type: string, payload: number }) {
	switch (action.type) {
		case actionType.incrementer: {
			return { ...etat, valeur: etat.valeur + action.payload };
		}
		case actionType.decrementer: {
			return { ...etat, valeur: etat.valeur - action.payload };
		}
		default:
			return etat;
	}
} 
```

version 2: reducer

``` typescript
const  _operations = createReducer(etatInitial,
	on(increment, etat  => <any>{ ...etat, valeur:  etat.valeur + 1 }),
	on(decrement, etat  => <any>{ ...etat, valeur:  etat.valeur + 1 }),
);

export  function  operations(state, action) {
	return  _operations(state, action);
}
```
