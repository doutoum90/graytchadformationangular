# Leçon 12 Angular

## Services et injection de dépendances

### création

``` 
ng g s nom-service
```

### Exemple de service

``` typescript
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Etudiant } from '../etudiantdir/lalekou/lalekou.component';

@Injectable({
	providedIn: 'root'
})

export  class  RecuperationDataService {
	private etudiants = <Array<Etudiant>>[
		{ id: 1, nom: 'ISSA', prenom: { prenom1:  'Daoud', prenom2:  'Mahamat' }, age: 25 },
		{ id: 2, nom: 'AHMAT', age: 25 },
		{ id: 3, nom: 'IDRIS', prenom: { prenom1: 'ALI', prenom2: 'MAHMOUD' }, age: 25 },
		{ id: 4, nom: 'MOUSSA', prenom: { prenom1: 'Daoud'}, age: 25 }
	];
	constructor() { }
	
	getEtudiants(): Observable<Array<Etudiant>> {
		return of(this.etudiants);
	}
	
	getEtudiant(id: number): Observable<Etudiant> {
		return of(this.etudiants.find(etudiant => etudiant.id === id));
	}
}
```

Injection de dépendance du service

``` typescript
export class ModificationEtudiantComponent implements OnInit {
	etudiant : Observable<Etudiant>;
	constructor(private  readonly  activated: ActivatedRoute,
		private  readonly  etudiantService: RecuperationDataService) { }

	ngOnInit(): void {
		this.etudiant = this.etudiantService.getEtudiant(Number(this.activated.snapshot.params.id));
	}
}
```
