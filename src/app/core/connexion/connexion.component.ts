import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router'; import { FormControl, FormGroup, Validators } from '@angular/forms';
;

interface User {
  password?: string;
  username?: string;
}
@Component({
  selector: 'gray-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  connexionFormulaire: FormGroup;
  constructor(
    private readonly auth: AuthentificationService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.connexionFormulaire = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z]+$"), Validators.maxLength(10), Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')]),
    });
    this.connexionFormulaire.get('password').valueChanges.subscribe(() => this.connexionFormulaire.get('passwordConfirm').updateValueAndValidity());
  }

  connexion() {
    if (this.connexionFormulaire.valid) {
      console.log('validation du formulaire');
      if (this.username.value === 'ADMIN' && this.password.value === 'ADMIN') {
        this.auth.connect();
        this.router.navigate(['list']);
      }
    }

  }

  get username() {
    return this.connexionFormulaire.get('username');
  }

  get password() {
    return this.connexionFormulaire.get('password');
  }

}
