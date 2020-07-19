import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
// import { verificationMotDePasse } from '../../validators/verificationMPasse.validator';

@Component({
  selector: 'gray-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  inscriptionFormulaire: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.inscriptionFormulaire = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z]+$"), Validators.maxLength(10), Validators.minLength(3)]),
      password: new FormControl(''),
      passwordConfirm: new FormControl('', ),
    });
    this.inscriptionFormulaire.get('password').valueChanges.subscribe(() => this.inscriptionFormulaire.get('passwordConfirm').updateValueAndValidity());
    // this.inscriptionFormulaire.get('username').valid
  }

  inscription() {
    if (this.inscriptionFormulaire.valid) {
      console.log(this.inscriptionFormulaire.value);
    }
  }
  estValide(name: string): boolean {
    return this.inscriptionFormulaire.get(name)?.touched && this.inscriptionFormulaire.get(name)?.invalid
  }
}
