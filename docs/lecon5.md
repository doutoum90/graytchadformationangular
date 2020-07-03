# Leçon 5 Angular 
## Quelques notions de base d'angular

### Tours sur les fichiers de config
### Les modules
classe avec le décorateurs `@NgModule` qui contient les tableaux
* declarations qui contient la declaration des composants
* imports qui contient les imports des autres modules qu'il soient des modules `internes` (dans notre application) ou des modules `externes` (définies dans node_modules)
* providers qui contient les services internes ou externes
* bootstrap: Uniquement dans le module core pour démarrer le composant parent
* et plein d'autres éléments ...
Le module core est le module appelé par main.ts.

exemple de module core 

```typescript
import { BrowserModule } from  '@angular/platform-browser';
import { NgModule } from  '@angular/core';
import { AppComponent } from  './app.component';
import { LalekouComponent } from  './comps/lalekou/lalekou.component';

@NgModule({
	declarations: [
		AppComponent,
		LalekouComponent
		],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
```


### Les composants
c'est un ensemble de 4 fichiers
* le *.ts: qui contient la partie dynamique (variables et traitements)
* le *.html:  qui contient la partie affichage du composant. Il se compose essentiellement des balises html, et d'autres elements à découvrir par la suite
* le *.scss ou .css ou .saas ou .less: c'est la feuille de style du composant
* le *.spec.ts: qui contient le test unitaire écrit à l'aide du langage Jasmine et exécuté par le framework karma. Ce fichier est optionnel et le composant peut fonctionner sans souci à l'absence de ce dernier.

Un composant peut être `inline` c'est que seul le *.ts contient la partie affichage, la partie style et la partie traitement. Ce type composant n'est pas recommandé, Il est plutôt conseil de séparer son code pour qu'il soit le plus lisible.

pour générer un composant non inline on utilise la commande 

```console
ng generate component nom-composant
# ou 
ng g component nom-composant
# ou 
ng g c nom-composant
```

exemple de composant non inline
le *.ts
```typescript
import { Component} from  '@angular/core';

@Component({
	selector:  'gray-lalekou',
	templateUrl:  './lalekou.component.html',
	styleUrls: ['./lalekou.component.scss']
})
export class LalekouComponent {
	constructor() { }
}
```

le *.html
``` html
<p>lalekou Gray Tchad!</p>
```
le *.scss
``` scss
p {
	color:red;
}
```

pour générer un composant inline on utilise la commande 

```console
ng g c nom-composant --inlineTemplate=true --inlineStyle=true
```
exemple de inline
```typescript
import { Component} from  '@angular/core';

@Component({
	selector:  'gray-lalekou',
	templateUrl:  `
		<p>lalekou Gray Tchad!</p>
	`,
	styleUrls: [
	`
	p {
	color:red;
	}
	`
	]
})
export class LalekouComponent {
	constructor() { }
}
```