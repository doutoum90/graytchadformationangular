# Leçon 21 Angular

## Les validateurs personnalisés

### Validateur au niveau du formulaire

***Extrait du validateur sur tout le formulaire***

``` typescript
import { ValidatorFn, AbstractControl, FormGroup } from  '@angular/forms';
export function verificationFormulaire(): ValidatorFn {
	return (formulaire: FormGroup): { [key: string]: boolean} | null  => {
		const  champConfirmMotPasse = formulaire.get('passwordConfirm');
		const  champMotPasse = formulaire.get('password');
		if (champConfirmMotPasse.value !== champMotPasse?.value)
			return { validationmdp:  true };
		return  null;
	}
}
```

***Initialisation du composant***

``` typescript
ngOnInit(): void {
	this.inscriptionFormulaire = new  FormGroup({
		username:  new  FormControl('', [
			Validators.required, 
			Validators.pattern("^[A-Za-z]+$"), 
			Validators.maxLength(10), 
			Validators.minLength(3)]),
		password:  new  FormControl(''),
		passwordConfirm:  new  FormControl(''),
	}, verificationFormulaire());
}
```

***Extrait de la template***

``` html
<p class="error text-danger" *ngIf="inscriptionFormulaire.touched && inscriptionFormulaire.errors?.validationmdp">
    Les mots de passe ne matchent pas !!!
</p>
```

### Validateur au niveau du champ

***Extrait du validateur sur un champ***

``` typescript
import { ValidatorFn, AbstractControl, FormGroup } from  '@angular/forms';
export function verificationChamp(): ValidatorFn {
	return (champConfirmMotPasse: AbstractControl): { [key: string]: boolean} | null  => {
		const  champMotPasse = champConfirmMotPasse.root.get('password');
		if (champConfirmMotPasse.value !== champMotPasse?.value)
			return { validationmdp:  true };
		return  null;
	}
}
```

***Initialisation du composant***

``` typescript
ngOnInit(): void {
	this.inscriptionFormulaire = new  FormGroup({
		username:  new  FormControl('', [
			Validators.required, 
			Validators.pattern("^[A-Za-z]+$"), 
			Validators.maxLength(10), 
			Validators.minLength(3)]),
		password:  new  FormControl(''),
		passwordConfirm:  new  FormControl('', verificationChamp()),
	});
}

get  passwordConfirm(){
	return  this.inscriptionFormulaire.get('passwordConfirm');
}
```

***Extrait de la template***

``` html
<p class="error text-danger" *ngIf="passwordConfirm.touched && passwordConfirm.errors?.validationmdp">
    Les mots de passe ne matchent pas !!!
</p>
```
