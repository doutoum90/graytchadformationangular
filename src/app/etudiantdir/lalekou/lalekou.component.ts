import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {RecuperationDataService} from '../../services/recuperation-data.service';

export interface Etudiant {
  id: number;
  nom: String;
  prenom?: Identite;
  age: number;
}
interface Identite {
  prenom1: String;
  prenom2: String;

}

@Component({
  selector: 'gray-lalekou',
  templateUrl: './lalekou.component.html',
  styleUrls: ['./lalekou.component.scss']
})
export class LalekouComponent implements OnInit {
  titre = 'Page lalekou';
  etudiants: Observable<Array<Etudiant>>;
  motCle = '';

  constructor(private readonly service : RecuperationDataService) { }

  ngOnInit(): void {
    this.etudiants = this.getData();
  }

  afficher(etudiant: Etudiant): void {
    console.log('Nom: ', etudiant.nom);
    console.log('Prenom: ', (etudiant.prenom) ? etudiant.prenom.prenom1 + ' ' + etudiant.prenom.prenom2 : '');
    console.log('Age: ', etudiant.age);
  }

  test(etudiant: Etudiant): void {
    console.log('vous avez survoler l\'étudiant ', etudiant.nom);
  }
  getData(): Observable<Array<Etudiant>> {
    return this.service.getEtudiants();
  }
}


