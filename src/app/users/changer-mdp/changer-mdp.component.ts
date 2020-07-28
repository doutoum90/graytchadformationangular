import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';
import { verification } from 'src/app/validators/verificationMPasse.validator';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'gray-changer-mdp',
  templateUrl: './changer-mdp.component.html',
  styleUrls: ['./changer-mdp.component.scss']
})
export class ChangerMDPComponent implements OnInit {
  changementFormulaire: FormGroup;
  erreurChangement: boolean;


  constructor(
    private readonly authService: AuthentificationService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.changementFormulaire = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z]+$"), Validators.maxLength(10), Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,40}$')]),
      passwordConfirm: new FormControl(''),
    }, verification());
    this.changementFormulaire.get('password').valueChanges.subscribe(() => this.changementFormulaire.get('passwordConfirm').updateValueAndValidity());
  }

  changer() {
    if (this.changementFormulaire.valid) {
      this.authService.getUserByUsername(this.username.value).subscribe(
        users => {
          if (users.length == 0) {
            this.erreurChangement = true;
            // mot de passe ou username incorrect
          } else {
            this.authService.modifierMdp(users[0].id, { username: this.username.value, password: Md5.hashStr(this.password.value) }).subscribe(v => {
              this.router.navigate(['users/connexion']);
            });
            this.router.navigate(['list']);
          }
        },
        err => {
          console.error('erreur d\'api', err);
        });
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
