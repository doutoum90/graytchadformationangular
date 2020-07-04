# Leçon 6 Angular

## La syntaxe des templates

### Utiliser d’autres composants dans nos templates

exemple
un composant parent

``` html
<h1>Lalekou Gray Tchad</h1>
<gray-lalekou></gray-lalekou>
```

un composant fils

``` html
<p>lalekou Gray Tchad!</p>
```

### Interpolation {{}}

``` html
<h2>{{titre}}</h2>
<td>{{etudiant.nom}}</td>
```

### Binding de propriété []

``` html
<input type="text" [value]="mavaleur">
```

### Événements ()

exemple d'evement de click et survol de la souris

``` html
<tr *ngFor="let etudiant of (etudiants | async)" (mouseout)="test(etudiant)" (click)="afficher(etudiant)">
</tr>
```
