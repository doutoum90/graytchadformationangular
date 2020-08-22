import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';
import { authenticateUser } from '../store/actions/users.actions';
import { Store, select } from '@ngrx/store';
import { UsersFeature } from '../store/reducers/users.reducer';
import { Observable } from 'rxjs';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'gray-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  connexionFormulaire: FormGroup;
  erreurConnexion: any;
  err$: Observable<any>;
  constructor(
    private readonly authService: AuthentificationService,
    private readonly router: Router
    // private readonly store: Store<UsersFeature>
  ) { }

  ngOnInit(): void {
    // this.err$ = this.store.pipe(select(v => v.users.erreur))
    this.connexionFormulaire = new FormGroup({
      email: new FormControl('', [Validators.required,
      // Validators.pattern("^[A-Za-z]+$"),
      Validators.email,
        // Validators.maxLength(10), Validators.minLength(3)
      ]),
      password: new FormControl('',
        [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,40}$')]
      ),
    });
  }

  connexion() {
    if (this.connexionFormulaire.valid) {
      console.log("hallo");
      this.authService.connexion(this.email.value, Md5.hashStr(this.password.value))
        .then(v => {
          // traitement
          console.log(1);
          this.router.navigate(['list']);
        })
        .catch(err => {
          // traitement erreur
          console.log(2);
          switch (err.code) {
            case 'auth/wrong-password': {
              this.erreurConnexion = { message: 'mot de passe incorrecte' };
              break;
            }
            case 'auth/user-not-found': {
              this.erreurConnexion = { message: 'email incorrecte' };
              break;
            }
          }
        })
      // this.store.dispatch(authenticateUser({ email: this.email.value, password: Md5.hashStr(this.password.value) }));
    }

  }

  get email() {
    return this.connexionFormulaire.get('email');
  }

  get password() {
    return this.connexionFormulaire.get('password');
  }

}
