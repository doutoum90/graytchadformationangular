import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  user$: Observable<User>;
  constructor(
    private readonly http: HttpClient,
    private readonly afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) {

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
    const data: User = {
      uid: user.uid,
      mail: user.mail,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    return userRef.set(data, { merge: true })
  }

  disconnect() {
    this.afAuth.auth.signOut();
    // this.afAuth.
  }

   connexion(mail: string, password: string | Int32Array) {
    try {
      return this.afAuth.auth.signInWithEmailAndPassword(mail, <string>password).then(v => {
        const user = {
          uid: v.user.uid,
          password: null,
          username: v.user.displayName,
          mail: v.user.email,
          displayName: v.user.displayName,
          photoURL: v.user.photoURL
        };
        return of(user);
      }).catch((error) => { console.log(error) });
    } catch (e) {
      console.error("big hu?", e);
    }

    // return from(this.updateUserData(this.afAuth.auth.signInWithEmailAndPassword(mail, <string>password)));
    // return this.http.get<User[]>(`${environment.API}/users/connect?username=${username}&password=${password}`);
  }
  getUserByUsername(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${environment.API}/users/getuser?username=${username}`);
  }
  inscription(user: User) {
    const users = this.afAuth.auth.createUserWithEmailAndPassword(user.mail, <string>user.password);
    return from(users);
    // return this.http.post<User>(`${environment.API}/users/inscription`, user);
  }
  modifierMdp(id: number | string, user: User): Observable<User> {
    return this.http.put<User>(`${environment.API}/users/changer/${id}`, user)
  }
}
