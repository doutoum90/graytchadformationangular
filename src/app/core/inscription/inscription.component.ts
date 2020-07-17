import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

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
      username: new FormControl('', [Validators.required ,Validators.pattern("^[A-Za-z]+$"), Validators.maxLength(10), Validators.minLength(3)]),
      password: new FormControl(),
      passwordConfirm: new FormControl(),
    });
    // this.inscriptionFormulaire.get('username').valid
  }

  inscription() {
    if(this.inscriptionFormulaire.valid){
      console.log(this.inscriptionFormulaire.value);
    }
  }
}
