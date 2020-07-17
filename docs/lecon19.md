# Leçon 19 Angular

## Formulaires pilotés par le code : version 1

1- ReactiveFormsModule
`Un FormGroup` et `FormControl`
`FormGroup` et `FormControl` , on les proriétés suivantes :

*   valid : si tous les champs sont valides, alors le groupe est valide.
*   invalid : si l’un des champs est invalide, alors le groupe est invalide.
*   errors : un objet contenant les erreurs du groupe, ou null si le groupe est entièrement valide. Chaque erreur en constitue la clé, et la valeur associée est un tableau contenant chaque contrôle affecté par cette erreur.
*   dirty : false jusqu’à ce qu’un des contrôles devienne "dirty".
*   pristine : l’opposé de dirty.
*   touched : false jusqu’à ce qu’un des contrôles devienne "touched".
*   untouched : l’opposé de touched.
*   value : la valeur du groupe. Pour être plus précis, c’est un objet dont les clé/valeurs sont les contrôles et leur valeur respective.
*   valueChanges : un Observable qui émet à chaque changement sur un contrôle du groupe.

extrait du composant 

``` typescript
inscriptionFormulaire: FormGroup;

ngOnInit(): void {

	this.inscriptionFormulaire = new  FormGroup({
		username:  new  FormControl('', [Validators.required ,Validators.pattern("^[A-Za-z]+$"), Validators.maxLength(10), Validators.minLength(3)]),
		password:  new  FormControl(),
		passwordConfirm:  new  FormControl(),
	});
}

inscription() {
	if(this.inscriptionFormulaire.valid){
		console.log(this.inscriptionFormulaire.value);
	}
}
```

extrait de la template

``` html
<form (ngSubmit)="inscription()" [formGroup]="inscriptionFormulaire">
    <div class="form-group">
        <label for="inputUserName">Nom d'utilisateur (*) </label>
        <input type="text" class="form-control" name="inputUserName" formControlName="username" aria-describedby="inputUserNameAide">
        <small *ngIf="inscriptionFormulaire.get('username').touched && inscriptionFormulaire.get('username').invalid" id="inputUserNameAide" class="form-text text-danger">nom d'utilisateur incorrecte</small>
    </div>
    <div class="form-group">
        <label for="inputPassword">Mot de passe</label>
        <input type="password" class="form-control" name="inputPassword" formControlName="password" aria-describedby="inputPasswordAide">
        <small id="inputPasswordAide" class="form-text text-muted">Taper ici pour modifier votre mot de
            passe.</small>
    </div>
    <div class="form-group">
        <label for="inputPasswordConfirm">Valider votre Mot de passe</label>
        <input type="password" class="form-control" formControlName="passwordConfirm" name="inputPasswordConfirm">
    </div>
    <button [disabled]="inscriptionFormulaire.invalid" type="submit" class="btn btn-primary">S'enregistrer</button>
</form>
```
