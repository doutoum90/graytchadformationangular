import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  user$: Observable<any>;
  constructor(private http: HttpClient,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore) {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      this.user$ = this.afs.doc<User>(`users/${user.uid}`).valueChanges();
    } else {
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
  }

  connect(user: User) {
    /* localStorage.setItem('connecter', 'true');
    localStorage.setItem('user', JSON.stringify(user)); */
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    console.log(data)
    localStorage.setItem('user', JSON.stringify(data));
    return userRef.set(data, { merge: true })
  }
  disconnect() {
    /*   localStorage.removeItem('connecter');
      localStorage.removeItem('user'); */
    this.afAuth.signOut();
  }

  async connexion(email: string, password: string | Int32Array) {
    // return this.http.get<User[]>(`${environment.API}/users/connect?username=${username}&password=${password}`);
    const credential = await this
      .afAuth
      .signInWithEmailAndPassword(email, <string>password)
    this.updateUserData(credential.user);
    return credential;
  }
  getUserByUsername(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${environment.API}/users/getuser?username=${username}`);
  }
  async inscription(user: User) {
    return await this.afAuth.createUserWithEmailAndPassword(user.email, <string>user.password);
    // return this.http.post<User>(`${environment.API}/users/inscription`, user);
  }
  modifierMdp(id: number | string, user: User): Observable<User> {
    return this.http.put<User>(`${environment.API}/users/changer/${id}`, user)
  }
}
