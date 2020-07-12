# Leçon 14 Angular

## Installation de font-awesome

[Lien contenant les details d'installation](https://www.npmjs.com/package/@fortawesome/angular-fontawesome)

``` console
npm install @fortawesome/fontawesome-svg-core -S
npm install @fortawesome/free-solid-svg-icons -S
npm install @fortawesome/angular-fontawesome@0.7.0 -S
```

Dans le module ajouté le module `FontAwesomeModule` .

``` typescript
import { BrowserModule }  from  '@angular/platform-browser';
import { NgModule }  from  '@angular/core';
import { AppComponent }  from  './app.component';
import { FontAwesomeModule }  from  '@fortawesome/angular-fontawesome';
@NgModule({
	imports: [
		BrowserModule,
		FontAwesomeModule
		],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
```

Modification dans le composant `typescript`

``` typescript
import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
	 selector:  'app-root',
	 templateUrl:  './app.component.html'
})
export class AppComponent {
	faCoffee  =  faCoffee;
}
```

Modification dans le composant `html`

``` html
<fa-icon [icon]="faCoffee"></fa-icon>
```
