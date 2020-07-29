# Leçon 34 Angular

## Les interactions inter-composant: du pére au fils

### @Input 

composant parent

``` typescript
export  class  ListStudentComponent {
	nomButton = 'btn1';
	etudiant: Etudiant = {
		id:  29,
		nom:  "EBIDAMI",
		prenom: {
			prenom1:  'AHMAT',
			prenom2:  'EBIDAMI'
		},
		age:  50,
		dateNaissance:  new  Date('2020-07-02'),
		fraisSubsistance:  4554545,
		note:  2233
	};
	mention = 'T.Bien';
	...
```

``` html
<gray-affiche-etudiant [etudiantCourant]="etudiant" [mentionA]="mention">
</gray-affiche-etudiant>
```

composant fils

``` typescript
@Input() etudiantCourant: Etudiant;
@Input() admis = true;
@Input() mentionA: string
```

``` html
<h5 class="card-title">{{etudiantCourant.nom}}</h5>

<p class="card-text">
    PRENOM: {{etudiantCourant.prenom.prenom1}}{{etudiantCourant.prenom.prenom2}}<br>
    AGE: {{etudiantCourant.age}}<br>
    DATE DE NAISSANCE: {{etudiantCourant.dateNaissance}}<br>
    FRAIS DE SUBSISTANCE: {{etudiantCourant.fraisSubsistance}}<br>
    NOTE: {{etudiantCourant.note}}<br>
    DECISION: {{admis? 'Admis' : 'Echoué'}}<br>
    MENTION: {{mentionA}}
</p>
```

### @Input sur getter et setter

composant pere reste inchangé

composant fils

``` typescript
private  _mentionA = '';
@Input()
set  mentionA(mention: string) {
	this._mentionA = mention;
}
get  mentionA() {
	return  this._mentionA;
}
```

``` html
<h5 class="card-title">{{mentionA}}</h5>
```

### @Input et ngOnchanges

``` typescript
export  class  ListStudentComponent {
	mention = 'T.Bien';
	changerMention() {
		if (this.mention === 'T.Bien') {
			this.mention = 'Excellent';
		} else {
			this.mention = 'T.Bien';
		}
	}
	...
```

``` html
<gray-affiche-etudiant [etudiantCourant]="etudiant" [mentionA]="mention">
</gray-affiche-etudiant>
<button  (click)="changerMention()">changer Mention</button>
```

composant fils

``` typescript
import { Component, Input, OnChanges, SimpleChanges } from  '@angular/core';
export  class  AfficheEtudiantComponent  implements  OnInit, OnChanges{
@Input() mentionA: string
ngOnChanges(changes: SimpleChanges) {
		if (changes['mentionA'].currentValue === 'Excellent') {	
		alert('Felicitation');
	}
}
...
```

``` html
{{mentionA}}
```

### template references Var

composant parent

``` html
<gray-affiche-etudiant #affiche [etudiantCourant]="etudiant" [mentionA]="mention">
    <button (click)="affiche.direBonjour()">dire bonjour</button>
```

composant fils

``` typescript
direBonjour() {
	alert('Lalekou Graytchad');
}
```

### @Viewchild 

``` typescript
import { Component, ViewChild, AfterViewInit } from  '@angular/core';
export class ListStudentComponent implements AfterViewInit{
@ViewChild(AfficheEtudiantComponent) compRef : AfficheEtudiantComponent;
ngAfterViewInit(){
	console.log(this.compRef);
}
```

``` html
<gray-affiche-etudiant [etudiantCourant]="etudiant" [mentionA]="mention">
</gray-affiche-etudiant>
```

### @ViewChildren

dans le composant parent

``` typescript
import { Component, OnInit, ViewChildren, AfterViewInit, QueryList } from  '@angular/core';
@ViewChildren(AfficheEtudiantComponent) compRef : QueryList<AfficheEtudiantComponent>;
ngAfterViewInit(){
	console.log(this.compRef.toArray());
}
```

``` html
<gray-affiche-etudiant [etudiantCourant]="etudiant" [mentionA]="mention">
</gray-affiche-etudiant>
<gray-affiche-etudiant [etudiantCourant]="etudiant" [mentionA]="mention">
</gray-affiche-etudiant>
```

### La projection

projeter des elements dans un composant

composant parent niveau superieur

``` html
<gray-affiche-etudiant [mentionA]="'Passable'"></gray-affiche-etudiant>
<gray-affiche-etudiant [mentionA]="'Passable'">
    <p class="corp-page">Bonjour Par la 3</p>
    <span id="pied-page">
        pied de page additionnel 3
    </span>
</gray-affiche-etudiant>
<gray-affiche-etudiant [etudiantCourant]="etudiant" [mentionA]="'EXCLENT'">
    <gray-text [text]="'Bonjour depuis le composant de texte 2'" class="corp-page"></gray-text>
    <span id="pied-page">pied de page additionnel 2</span>
</gray-affiche-etudiant>
```

composant parent niveau inferieur (gray-affiche-etudiant)

``` html
<div class="content">
    <div class="body">
        <ng-content select=".corp-page"></ng-content>
        {{mentionA}}
    </div>
    <div class="">
        Pieds de page
        <ng-content select="#pied-page"></ng-content>
    </div>
</div>
```

composant fils (gray-text)

``` html
<h5>{{text}}</h5>
```

``` typescript
export  class  TextComponent  implements  OnInit {
	@Input() text:string;
```

### @ContentChild

une fois la projection mise en place nous faisons ceci dans le composant parent niveau inferieur.

``` typescript
import { Component, QueryList, AfterContentInit, ContentChild } from  '@angular/core';
export class AfficheEtudiantComponent implements AfterContentInit {
...
@ContentChild(TextComponent) textRef: QueryList<TextComponent>;
ngAfterContentInit(){
	console.log(this.textRef));
}
```

### @ContentChildren

``` typescript
import { Component,, QueryList, AfterContentInit, ContentChildren } from  '@angular/core';
export class AfficheEtudiantComponent implements AfterContentInit {
...
@ContentChildren(TextComponent) textRef: QueryList<TextComponent>;
ngAfterContentInit(){
	console.log(this.textRef.toArray());
}
```
