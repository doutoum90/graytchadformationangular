import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'gray-ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.scss']
})
export class AjoutEtudiantComponent implements OnInit {
  ajoutFormulaire: FormGroup;
  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ajoutFormulaire = this.formBuilder.group({
      nom: this.formBuilder.control(''),
      prenom: this.formBuilder.group({
        prenom1: this.formBuilder.control(''),
        prenom2: this.formBuilder.control(''),
      }),
      age: this.formBuilder.control(''),
      dateNaissance: this.formBuilder.control(''),
      fraisSubsistance: this.formBuilder.control(''),
      note: this.formBuilder.control(''),
    })
  }
  
  ajouterEtudiant() {
    console.log(this.ajoutFormulaire.value);
  }


  get prenom() {
    return this.ajoutFormulaire.get('prenom');
  }
  
  reinit() {
    this.ajoutFormulaire.reset();
  }
}
