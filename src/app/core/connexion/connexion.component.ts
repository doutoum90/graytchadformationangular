import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router'; import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';


@Component({
  selector: 'gray-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  connexionFormulaire: FormGroup;
  erreurConnexion = false;
  constructor(
    private readonly auth: AuthentificationService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.connexionFormulaire = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z]+$"), Validators.maxLength(10), Validators.minLength(3)]),
      password: new FormControl('',
        [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,40}$')]
      ),
    });
  }

  connexion() {
    if (this.connexionFormulaire.valid) {
     
      this.auth.connexion(this.username.value, Md5.hashStr(this.password.value)).subscribe(
        users => {
          if (users.length == 0) {
            this.erreurConnexion = true;
            // mot de passe ou username incorrect
          } else {
            this.auth.connect(users[0]);
            this.router.navigate(['list']);
          }
        },
        err => {
          console.error('erreur d\'api', err);
        });
    }

  }

  get username() {
    return this.connexionFormulaire.get('username');
  }

  get password() {
    return this.connexionFormulaire.get('password');
  }

}
