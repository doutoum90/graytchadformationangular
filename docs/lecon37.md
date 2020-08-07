# Leçon 37 Angular

## Directives structurelles : ng-template, ng-container, ngTemplateOutlet, viewContainerRef

### ng-template

``` typescript
export class ListStudentComponent implements OnInit {
	show = true;
}
```

``` html
<ng-template #thenBlock>
    Block if
</ng-template>

<ng-template #elseBlock>
    Block else
</ng-template>

<div *ngIf="show;then thenBlock;else elseBlock"></div>
```

### ng-container

``` typescript
export class ListStudentComponent implements OnInit {
	show = true;
}
```

``` html
<ng-template #thenBlock>
    Block if
</ng-template>

<ng-template #elseBlock>
    Block else
</ng-template>

<ng-container *ngIf="show;then thenBlock;else elseBlock"></ng-container>
```

### ngTemplateOutlet et les templates parametrées

``` typescript
export class ListStudentComponent implements OnInit {
	etudiants$: Observable<any>;
	ngOnInit(): void {
		this.etudiants$ = this.store.pipe(select(selectFeatureEtudiants));
		this.nombreTotal$ = this.store.pipe(select(v  =>  v.etudiant.nombreTotal));
	}
```

``` html
<ng-container *ngIf="(etudiants$ |async) as et; else elseBlocEtudiant">
    <ng-container *ngTemplateOutlet="blocEtudiant, context: {etudiants: etudiants$}"></ng-container>
</ng-container>

<ng-template #blocEtudiant let-etudiants="etudiants">
    <tr *ngFor="let etudiant of etudiants| async">
        <td> {{etudiant?.nom}}</td>
        <td>{{etudiant.prenom ? (etudiant.prenom.prenom1): null}} {{etudiant?.prenom?.prenom2}}</td>
        <td>{{etudiant.age | agefr}}</td>
        <td>{{etudiant.dateNaissance | date : 'dd/MM/yyyy'}}</td>
        <td>{{etudiant.fraisSubsistance | currency : 'FCFA ' | inverser }}</td>
        <td>{{etudiant.note | percent}}</td>
    </tr>
</ng-template>

<ng-template #elseBlocEtudiant>

    <p class="text-center">
        Aucun étudiant trouvé
    </p>

</ng-template>
```

### viewContainerRef et instanciation dynamique

``` typescript
export class ListStudentComponent implements OnInit, AfterViewInit {
	etudiants$: Observable<any>;
	nombreTotal$: Observable<number>;
	capacite = 10;
	numeroPage = 1;

	@ViewChild('tableauEtudiant', { read:  ViewContainerRef }) tableauEtudiant: ViewContainerRef;
	constructor(
		private  readonly  componentFactoryResolver: ComponentFactoryResolver,
		private  readonly  store: Store<EtudiantsFeature>
	) { }

	ngOnInit(): void {
		this.propager({ numeroPage:  this.numeroPage, capacite:  this.capacite });
		this.etudiants$ = this.store.pipe(select(selectFeatureEtudiants));
		this.nombreTotal$ = this.store.pipe(select(v  =>  v.etudiant.nombreTotal));

	}

	ngAfterViewInit() {
		const  lalekouRef = this.tableauEtudiant.createComponent(
		this.componentFactoryResolver.resolveComponentFactory(LalekouComponent)
		);
		lalekouRef.instance.etudiants$ = this.etudiants$;
		lalekouRef.instance.capacite = this.capacite;
		lalekouRef.instance.nombreTotal$ = this.nombreTotal$;
		lalekouRef.instance.numeroPage = this.numeroPage;
		lalekouRef.instance.afficheEvent.subscribe((event)=>this.afficher(event));
		lalekouRef.instance.supprimeEvent.subscribe((event)=>this.supprimer(event));
		lalekouRef.instance.detailEvent.subscribe((event)=>this.detail(event));
		lalekouRef.instance.modifieEvent.subscribe((event)=>this.modifier(event));
		lalekouRef.instance.propagerEvent.subscribe((event)=>this.propager(event));
	}
```

``` html
<div #tableauEtudiant></div>
```
