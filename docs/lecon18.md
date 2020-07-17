# Leçon 18 Angular

## Les formulaires

### Driven template forms ( formulaires pilotés par les templates)

1- importer le module `FormsModule`
2- utiliser la directive `ngModel` pour faire le binding.

un extrait de la template

``` html
<h1>Connexion</h1>

<form (ngSubmit)="connexion()">
    <div class="form-group">
        <label for="inputUserName">Nom d'utilisateur</label>
        <input type="text" [(ngModel)]="user.username">
    </div>

    <div class="form-group">
        <label for="inputPassword">Mot de passe</label>
        <input type="password" [(ngModel)]="user.password">
    </div>
    <button type="submit" class="btn btn-primary">S'authentifier</button>

</form>

<div [ngStyle]="{'color':'red'}" *ngIf="afficherMessageErreur">
    {{messageErreur}}
</div>
```

un extrait du code

``` typescript
user: User = {};
messageErreur = 'Identifiants incorrect';
afficherMessageErreur = false;

constructor(
private  readonly  auth: AuthentificationService,
private  readonly  router: Router) { }

connexion() {
	if (this.user.username === 'ADMIN' && this.user.password === 'ADMIN') {
		this.auth.connect();
		this.router.navigate(['list']);
	}
	this.afficherMessageErreur = true;
}
```
