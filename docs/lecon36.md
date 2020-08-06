# Leçon 36 Angular

## Cycle de vie de composant : lifeCycle hook

**ngOnChanges**

dans le composant parent 

``` typescript
export  class  ListStudentComponent  implements  OnInit {
	nombre1 = 1;
	nombre2 = 2;
}```

``` html
<div class="row">
    <div class="col-6 mb-3">

        <div class="form-group">
            <label for="inputNom">Nombre 1</label>
            <input [(ngModel)]="nombre1" class="form-control">
        </div>
        <div class="form-group">
            <label for="inputNom">Nombre 2</label>
            <input [(ngModel)]="nombre2" class="form-control">
        </div>
    </div>
</div>
<gray-calcul [nombre1]="nombre1" [nombre2]="nombre2"></gray-calcul>
```

dans le composant fils

``` typescript
export class CalculComponent implements OnChanges {
	@Input() nombre1: number;
	@Input() nombre2: number;
	ngOnChanges(changes: SimpleChanges): void {
		if (changes['nombre1']) {
			console.log('nombre1 modifié, ancien valeur', changes['nombre1'].previousValue);
			console.log('valeur actuelle,', changes['nombre1'].currentValue);
			console.log(changes['nombre1'].firstChange ? 'premier modification' : 'pas premier fois');
		}

		if (changes['nombre2']) {
			console.log('nombre2 modifié, ancien valeur', changes['nombre2'].previousValue);
			console.log('valeur actuelle,', changes['nombre2'].currentValue);
			console.log(changes['nombre2'].firstChange ? 'premier modification' : 'pas premier fois');
		} 

}
```

``` html
{{nombre1}} {{nombre2}}
```

**ngOnInit**

dans le composant parent 

``` typescript
export  class  ListStudentComponent  implements  OnInit {
	nombre1 = 1;
	nombre2 = 2;
}```

``` html
<div class="row">
    <div class="col-6 mb-3">

        <div class="form-group">
            <label for="inputNom">Nombre 1</label>
            <input [(ngModel)]="nombre1" class="form-control">
        </div>
        <div class="form-group">
            <label for="inputNom">Nombre 2</label>
            <input [(ngModel)]="nombre2" class="form-control">
        </div>
    </div>
</div>
<gray-calcul [nombre1]="nombre1" [nombre2]="nombre2"></gray-calcul>
```

dans le composant fils

``` typescript
export class CalculComponent implements OnChanges,OnInit {
	@Input() nombre1: number;
	@Input() nombre2: number;
	ngOnInit() {
		console.log('dans ngOnInit');
		this.suscription = this.obs.subscribe(valeur  =>console.log(valeur));
	}
}
```

``` html
{{nombre1}} {{nombre2}}
```

        

**ngDoCheck**

dans le composant parent

``` typescript
export  class  ListStudentComponent  implements  OnInit {
	user;
	show = true;
	ngOnInit(): void {
		this.initialiser();
	}
	initialiser() {
		this.user = { username:  'GrayTchad', password:  'GrayTchad' };
	}
	detruire(){
		this.show = !this.show;
	}
}
```

``` html
<div class="row">
    <div class="col-6 mb-3">

        <div class="form-group">
            <label for="inputNom">Username</label>
            <input [(ngModel)]="user.username" class="form-control">
        </div>
        <div class="form-group">
            <label for="inputNom">Password</label>
            <input [(ngModel)]="user.password" class="form-control">
        </div>
    </div>
</div>
<button (click)="initialiser()" class="btn btn-success">RESET</button>
<gray-calcul [user]="user"></gray-calcul>
```

 dans le composant fils

``` typescript
export class CalculComponent implements DoCheck {
	 @Input() user: { username: string, password: string };
	 ngDoCheck() {
		 console.log('dans ngDoCheck');
		 console.log(this.user);
	}
```

``` html
<p style="background-color: lightcoral"> Username = {{user.username}} <br> password = {{user.password}}</p>
```

    

**ngAfterContentInit** et **ngAfterContentChecked**
dans le composant parent

``` typescript
export  class  ListStudentComponent  implements  OnInit {
	user;
	show = true;
	ngOnInit(): void {
		this.initialiser();
	}
	initialiser() {
		this.user = { username:  'GrayTchad', password:  'GrayTchad' };
	}
	detruire(){
		this.show = !this.show;
	}
}
```

``` html
<div class="row">
    <div class="col-6 mb-3">

        <div class="form-group">
            <label for="inputNom">Username</label>
            <input [(ngModel)]="user.username" class="form-control">
        </div>
        <div class="form-group">
            <label for="inputNom">Password</label>
            <input [(ngModel)]="user.password" class="form-control">
        </div>
    </div>
</div>
<button (click)="initialiser()" class="btn btn-success">RESET</button>
<gray-calcul [user]="user">
    <p #paragraphe>Bonjour</p>
    <div #div>Hello World</div>
</gray-calcul>
```

 
dans le composant fils

``` typescript
export class CalculComponent implements AfterContentInit, AfterContentChecked {
	 @Input() user: { username: string, password: string };
	 @ContentChild('paragraphe') paragraphe: ElementRef;
	 @ContentChild('div') div: ElementRef;
	 ngAfterContentInit() {
		console.log('dans ngAfterContentInit');
		console.log(this.paragraphe);
		console.log(this.div);
	}
	ngAfterContentChecked() {
		console.log('dans ngAfterContentChecked');
		console.log(this.paragraphe);
		console.log(this.div);
	}
```

``` html
<p style="background-color: lightcoral"> Username = {{user.username}} <br> password = {{user.password}}</p>
<ng-content select="div"></ng-content>
<ng-content select="p"></ng-content>
```

    

**ngAfterViewInit** et **ngAfterViewChecked** 

dans le composant parent

``` typescript
export  class  ListStudentComponent  implements  OnInit {
	user;
	show = true;
	ngOnInit(): void {
		this.initialiser();
	}
	initialiser() {
		this.user = { username:  'GrayTchad', password:  'GrayTchad' };
	}
	detruire(){
		this.show = !this.show;
	}
}
```

``` html
<div class="row">
    <div class="col-6 mb-3">

        <div class="form-group">
            <label for="inputNom">Username</label>
            <input [(ngModel)]="user.username" class="form-control">
        </div>
        <div class="form-group">
            <label for="inputNom">Password</label>
            <input [(ngModel)]="user.password" class="form-control">
        </div>
    </div>
</div>
<button (click)="initialiser()" class="btn btn-success">RESET</button>
<gray-calcul [user]="user">
</gray-calcul>
```

 
dans le composant fils

``` typescript
export class CalculComponent implements AfterViewInit, AfterViewChecked {
	@Input() user: { username: string, password: string };
	@ViewChild('contenu') contenu: ElementRef;
	ngAfterViewInit() {
		console.log('dans ngAfterViewInit');
		console.log(this.contenu);
	}
	ngAfterViewChecked() {
		console.log('dans ngAfterViewChecked');
		console.log(this.contenu);
	}
}
```

``` html
<p #contenu style="background-color: lightcoral"> Username = {{user.username}} <br> password = {{user.password}}</p
```

**ngOnDestroy** 
dans le composant parent

``` typescript
export  class  ListStudentComponent  implements  OnInit {
	user;
	show = true;
	ngOnInit(): void {
		this.initialiser();
	}
	initialiser() {
		this.user = { username:  'GrayTchad', password:  'GrayTchad' };
	}
	detruire(){
		this.show = !this.show;
	}
}
```

``` html
<div class="row">
    <div class="col-6 mb-3">

        <div class="form-group">
            <label for="inputNom">Username</label>
            <input [(ngModel)]="user.username" class="form-control">
        </div>
        <div class="form-group">
            <label for="inputNom">Password</label>
            <input [(ngModel)]="user.password" class="form-control">
        </div>
    </div>
</div>
<button (click)="initialiser()" class="btn btn-success">RESET</button>
<button (click)="detruire()" class="btn btn-danger">{{show ? 'DETRUIRE' : 'AFFICHER'}}</button>
<gray-calcul *ngIf="show" [user]="user">
</gray-calcul>
```

 
dans le composant fils

``` typescript
export class CalculComponent implements OnInit, OnDestroy {
	@Input() user: { username: string, password: string };
	obs : Observable<number[]>= of([1,2,3,5,6,7,8]);
	suscription: Subscription;
	ngOnInit() {
		console.log('dans ngOnInit');
		this.suscription = this.obs.subscribe(valeur  =>console.log(valeur));
	}
	ngOnDestroy(){
		console.log('destruction');
		this.suscription.unsubscribe();
	}
}
```

``` html
<p style="background-color: lightcoral"> Username = {{user.username}} <br> password = {{user.password}}</p
```
