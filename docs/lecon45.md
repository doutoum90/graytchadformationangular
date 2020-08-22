# Leçon 45 Angular
## L'api firebase authentication
```console
npm  install -g firebase-tools
npm i firebase @angular/fire -S
```
dans le module
```typescript
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
const firebaseConfig = {...}
@NgModule({
	...
	imports: [
		AngularFireModule.initializeApp(config),
	    AngularFirestoreModule, // firestore
	    AngularFireAuthModule, // auth
	    AngularFireStorageModule // storage
	],
})
```
```typescript
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

export class AuthenticationService  {
	user$: Observable<User>;
	constructor(
	private afAuth: AngularFireAuth,
	private afs: AngularFirestore,
	private router: Router) {
		this.user$ = this.afAuth.authState.pipe(
			switchMap(user => {
				if (user) {
					return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
				} else {
					return of(null);
				}
			})
		);
	}

	private updateUserData(user) {
		const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
		const data = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoURL: user.photoURL
		};
		return userRef.set(data, { merge: true })
	}

	async signOut() {
		await this.afAuth.auth.signOut();
		this.router.navigate(['/']);
	}

	signUp(email: string, password: string) {
		return this.afAuth
		.auth
		.createUserWithEmailAndPassword(email, password);
	}

	async signIn(email: string, password: string) {
		const credential = await this.afAuth
		.auth
		.signInWithEmailAndPassword(email, password)
		return this.updateUserData(credential.user);
	}
}
```



guards

```typescript

constructor(
	private  readonly  router: Router,
	private  readonly  auth: AuthentificationService
) {
canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

return  this.auth.user$.pipe(
	take(1),
	map(user  => !!user), // <-- map to boolean
	tap(loggedIn  => {
		if (!loggedIn) {
			this.router.navigate(['/users/connexion']);
		}
	})
);

}
```