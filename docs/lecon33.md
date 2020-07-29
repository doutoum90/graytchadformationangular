# Leçon 33 Angular

## Les interactions entre composant et template	

### binding unidirectionnel

****A- de classe vers template****
1- interpolation {{}}

``` typescript
texteDeBinding = 'Un text super interessant';
```

``` html
<p>{{texteDeBinding}}</p>
```

2- binding de propriété []

``` typescript
lienImage = 'https://www.crwflags.com/fotw/images/t/td.gif';
```

``` html
<img [src]="lienImage">
```

****B- de template vers classe****
binding d'evenement  ()

``` typescript
actionClick(message: string) {
	console.log('clik', message);
}
```

``` html
<img src="https://www.crwflags.com/fotw/images/t/td.gif" (click)="actionClick('Lalekou graytchad')">
```

###  binding bidirectionnel [()]

``` typescript
motCle: string;
```

``` html
<div class="mt-5">
    <p>{{motCle}}</p>
    <input type="text" [(ngModel)]="motCle">
</div>
```

### binding bidirectionnel en séparé [()] = [] + ()

``` typescript
motCle: string;
mettreAjourValeur(valeur: any) {
	if (valeur == 'Lalekou') {
		alert('lalekou');
	}
	this.motCle = valeur;
}
```html
<!--<div  class="mt-5">
	<p>{{motCle}}</p>
	<input  type="text" [ngModel]="motCle"  (ngModelChange)="motCle=$event">
</div>-->
<div  class="mt-5">
	<p>{{motCle}}</p>
	<input  type="text" [ngModel]="motCle"  (ngModelChange)="mettreAjourValeur($event)">
</div>
```

### get et set

``` typescript
_username: string;
get username(): string {
	return  this._username;
}

set  username(username: string) {
	if (username === 'TCHAD') {
		alert('Bienvenu au tchad');
	}
	this._username = username;
}
```html

<div  class="mt-5">
	<p>{{username}}</p>
	<input  type="text" [(ngModel)]="username">
</div>
```

### viewChild

``` typescript
import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from  '@angular/core';
export  class  ExempleComponent  implements  AfterViewInit {
...
@ViewChild('blabla') blablaInput: ElementRef;

ngAfterViewInit(): void {
	// donner le focus à l'objet
	this.blablaInput.nativeElement.focus();
	// definir un hot observable au click pour faire different traitements
	fromEvent(this.blablaInput.nativeElement, 'click').subscribe(v=>v);
	// afficher le dom
	console.log(this.blablaInput.nativeElement);
	// affiche la value: blabla
	console.log(this.blablaInput.nativeElement.value);
}
```

``` html
<div class="mt-5">
    <p>Votre nom d'utilisateur {{blabla}}</p>
    <input #blabla type="text" value="blabla">
</div>
```
