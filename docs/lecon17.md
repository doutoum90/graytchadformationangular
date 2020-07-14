# Leçon 17 Angular

## Les guards: sécuriser les pages 

```console 
ng g g nomguard
```
le corps du guards
```typescript
@Injectable({
	providedIn:  'root'
})
export  class  AuthentificationGuard  implements  CanActivate {
constructor(
	private  readonly  router: Router,
	private  readonly  auth: AuthentificationService
	) {}

	canActivate(): boolean  {

	if (localStorage.getItem('connecter') !== 'true')

	this.router.navigate(['connexion']);

	return  localStorage.getItem('connecter') === 'true';

	}
}
```

le service d'authentification

```typescript
@Injectable({
	providedIn: 'root'
})
export class AuthentificationService {
	// estConnecte = false;
	constructor() { }

	connect() {
		localStorage.setItem('connecter', 'true');
		// this.estConnecte = true;
	}
}
```

dans le module de routing

```typescript
{ path: 'list', canActivate: [AuthentificationGuard], loadChildren: () =>  import('./etudiantdir/etudiant.module').then(e  =>  e.EtudiantModule) },
```