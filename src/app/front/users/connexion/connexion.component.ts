import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';
import { authenticateUser } from '../store/actions/users.actions';
import { Store, select } from '@ngrx/store';
import { UsersFeature } from '../store/reducers/users.reducer';
import { Observable } from 'rxjs';


@Component({
  selector: 'gray-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  connexionFormulaire: FormGroup;
  erreurConnexion = false;
  err$: Observable<any>;
  constructor(private readonly store: Store<UsersFeature>) { }

  ngOnInit(): void {
    this.err$ = this.store.pipe(select(v => v.users.erreur))
    this.connexionFormulaire = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z]+$"), Validators.maxLength(10), Validators.minLength(3)]),
      password: new FormControl('',
        [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,40}$')]
      ),
    });
  }

  connexion() {
    if (this.connexionFormulaire.valid) {
      this.store.dispatch(authenticateUser({ username: this.username.value, password: Md5.hashStr(this.password.value) }));
    }

  }

  get username() {
    return this.connexionFormulaire.get('username');
  }

  get password() {
    return this.connexionFormulaire.get('password');
  }

}
