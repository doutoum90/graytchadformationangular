import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gray-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formulaireContact: FormGroup;
  messageEnvoyer = false;

  listeSujet = [
    { name: 'Demande d\'aide', valeur: 'aide' },
    { name: 'Salutation', valeur: 'salutation' },
    { name: 'Lalekou gray tchad', valeur: 'lalekou' }
  ];

  constructor(private readonly formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulaireContact = this.formbuilder.group({
      // nom: ['', Validators.minLength(5)]
      nom: this.formbuilder.control('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3),
        Validators.pattern('^[A-Za-z]+$')
      ]),
      prenom: this.formbuilder.control('', [
        Validators.maxLength(50),
        Validators.minLength(5),
        Validators.pattern('^[A-Za-z]+$')
      ]),
      email: this.formbuilder.control('', [Validators.required, Validators.email]),
      sujet: this.formbuilder.control(''),
      message: this.formbuilder.control(''),
    })
  }

  envoyer() {
    if (this.formulaireContact.valid) {
      console.log(this.formulaireContact.value);
      console.log('envoi de message ...');
      this.formulaireContact.reset();
      this.messageEnvoyer = true;
    }
  }

  estValid(nomChamp: string) {
    return this.formulaireContact.get(nomChamp).touched
      &&
      this.formulaireContact.get(nomChamp).invalid;
  }
  get nom() {
    return this.formulaireContact.get('nom');
  }
  get prenom() {
    return this.formulaireContact.get('prenom');
  }
  get email() {
    return this.formulaireContact.get('email');
  }
  get sujet() {
    return this.formulaireContact.get('nom');
  }
  get message() {
    return this.formulaireContact.get('nom');
  }
}
