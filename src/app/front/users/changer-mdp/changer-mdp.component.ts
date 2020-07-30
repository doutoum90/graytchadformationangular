import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { verification } from 'src/app/validators/verificationMPasse.validator';
import { Md5 } from 'ts-md5/dist/md5';
import { Store, select } from '@ngrx/store';
import { UsersFeature } from '../store/reducers/users.reducer';
import { changePassword } from '../store/actions/users.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'gray-changer-mdp',
  templateUrl: './changer-mdp.component.html',
  styleUrls: ['./changer-mdp.component.scss']
})
export class ChangerMDPComponent implements OnInit {
  changementFormulaire: FormGroup;
  erreurChangement: boolean;
  err$: Observable<any>;

  constructor(private readonly store: Store<UsersFeature>) { }

  ngOnInit(): void {
    this.err$ = this.store.pipe(select(v => v.users.erreur));
    this.changementFormulaire = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z]+$"), Validators.maxLength(10), Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,40}$')]),
      passwordConfirm: new FormControl(''),
    }, verification());
    this.changementFormulaire.get('password').valueChanges.subscribe(() => this.changementFormulaire.get('passwordConfirm').updateValueAndValidity());
  }

  changer() {
    if (this.changementFormulaire.valid) {
      this.store.dispatch(
        changePassword({
          username: this.username.value,
          password: Md5.hashStr(this.password.value)
        }));
    }
  }
  estValide(name: string): boolean {
    return this.changementFormulaire.get(name)?.touched && this.changementFormulaire.get(name)?.invalid
  }

  get passwordConfirm() {
    return this.changementFormulaire.get('passwordConfirm');
  }

  get username() {
    return this.changementFormulaire.get('username');
  }
  get password() {
    return this.changementFormulaire.get('password');
  }
}
