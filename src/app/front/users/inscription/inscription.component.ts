import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { verification } from '../../../validators/verificationMPasse.validator';
import { User } from 'src/app/models/user.model';
import { Md5 } from 'ts-md5/dist/md5';
import { Store } from '@ngrx/store';
import { UsersFeature } from '../store/reducers/users.reducer';
import { createUser } from '../store/actions/users.actions';

@Component({
  selector: 'gray-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  inscriptionFormulaire: FormGroup;


  constructor(private readonly store: Store<UsersFeature>) { }

  ngOnInit(): void {
    this.inscriptionFormulaire = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z]+$"), Validators.maxLength(10), Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,40}$')]),
      passwordConfirm: new FormControl(''),
    }, verification());
    this.inscriptionFormulaire.get('password').valueChanges.subscribe(() => this.inscriptionFormulaire.get('passwordConfirm').updateValueAndValidity());
  }

  inscription() {
    if (this.inscriptionFormulaire.valid) {
      const user: User = { username: this.username.value, password: Md5.hashStr(this.password.value) };
      this.store.dispatch(createUser({ user }));
    }
  }
  estValide(name: string): boolean {
    return this.inscriptionFormulaire.get(name)?.touched && this.inscriptionFormulaire.get(name)?.invalid
  }

  get passwordConfirm() {
    return this.inscriptionFormulaire.get('passwordConfirm');
  }

  get username() {
    return this.inscriptionFormulaire.get('username');
  }
  get password() {
    return this.inscriptionFormulaire.get('password');
  }
}
