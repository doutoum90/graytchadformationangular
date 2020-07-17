# Leçon 20 Angular

## Formulaires pilotés par le code : version 2

extrait du composant

``` typescript
formulaireContact: FormGroup;
messageEnvoyer = false;
listeSujet = [
	{ name:  'Demande d\'aide', valeur:  'aide' },
	{ name:  'Salutation', valeur:  'salutation' },
	{ name:  'Lalekou gray tchad', valeur:  'lalekou' }
];
constructor(private  readonly  formbuilder: FormBuilder) { }

ngOnInit(): void {

	this.formulaireContact = this.formbuilder.group({
		// nom: ['', Validators.minLength(5)]
		nom:  this.formbuilder.control('', [
			Validators.maxLength(50),
			Validators.minLength(5),
			Validators.pattern('^[A-Za-z]+$')
		]),
		prenom:  this.formbuilder.control('', [
			Validators.maxLength(50),
			Validators.minLength(5),
			Validators.pattern('^[A-Za-z]+$')
		]),
		email:  this.formbuilder.control('', Validators.email),
		sujet:  this.formbuilder.control(''),
		message:  this.formbuilder.control(''),
	});
}

envoyer() {
	if (this.formulaireContact.valid) {
		console.log(this.formulaireContact.value);
		console.log('envoi de message ...');
		this.formulaireContact.reset();
		this.messageEnvoyer = true;
	}
}
estValid(nomChamp: string) {
	return  this.formulaireContact.get(nomChamp).touched
	&&
	this.formulaireContact.get(nomChamp).invalid;
}
```

extrait du html

``` html
<p [ngStyle]="{'color': 'green'}" *ngIf="messageEnvoyer">

    Votre message a été envoyer avec succés

</p>

<h1>Nous contacter</h1>

<form (ngSubmit)="envoyer()" [formGroup]="formulaireContact">
    <div class="form-group">
        <label for="inputName">Nom</label>
        <input type="text" formControlName="nom" class="form-control" name="inputName">
        <p [ngStyle]="{'color': 'red'}" *ngIf="estValid('nom')">
            Nom incorrect
        </p>
    </div>
    <div class="form-group">
        <label for="inputLastName">Prénom</label>
        <input type="text" formControlName="prenom" class="form-control" name="inputLastName">
        <p [ngStyle]="{'color': 'red'}" *ngIf="estValid('prenom')">
            Prénom incorrect
        </p>
    </div>
    <div class="form-group">
        <label for="inputMail">Mail</label>
        <input type="email" formControlName="email" class="form-control" name="inputMail">
        <p [ngStyle]="{'color': 'red'}" *ngIf="estValid('email')">
            Mail incorrect
        </p>
    </div>
    <div class="form-group">
        <label for="inputMail">Sujet</label>
        <select class="form-control" formControlName="sujet">
            <option *ngFor="let element of listeSujet" [value]="element.valeur">{{element.name}}</option>
        </select>
    </div>
    <div class="form-group">
        <label for="message">Message</label>
        <textarea formControlName="message" class="form-control form-control-lg mb-3" rows="3"></textarea>
    </div>
    <button type="submit" [disabled]="formulaireContact.invalid" class="btn btn-primary">Nous contacter</button>
</form>
```
