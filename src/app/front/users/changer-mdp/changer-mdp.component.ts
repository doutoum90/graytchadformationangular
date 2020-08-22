import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { verification } from 'src/app/validators/verificationMPasse.validator';
import { Observable } from 'rxjs';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'gray-changer-mdp',
  templateUrl: './changer-mdp.component.html',
  styleUrls: ['./changer-mdp.component.scss']
})
export class ChangerMDPComponent implements OnInit {
  changementFormulaire: FormGroup;
  erreurChangement: boolean;
  afficheMessage: string;

  constructor(
    private readonly authService: AuthentificationService
    ) { }

  ngOnInit(): void {
    this.changementFormulaire = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
    });
  }

  changer() {
    if (this.changementFormulaire.valid) {
      console.log({
        email: this.email.value
      })
      this.authService.modifierMdp(this.email.value)
        .then(v => this.afficheMessage = 'Une lien vous a été envoyé')
        .catch(err => console.log(err))
    }
  }
  estValide(name: string): boolean {
    return this.changementFormulaire.get(name)?.touched && this.changementFormulaire.get(name)?.invalid
  }

  get email() {
    return this.changementFormulaire.get('email');
  }

}
