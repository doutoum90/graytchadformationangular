import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RecuperationDataService } from '../../services/recuperation-data.service';
import { faTrash, faEdit, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalSuppressionComponent } from 'src/app/core/modal-suppression/modal-suppression.component';

export interface Etudiant {
  id: number;
  nom: String;
  prenom?: Identite;
  age: number;
  dateNaissance: Date;
  fraisSubsistance: number;
  note: number;
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
  iconSuppr: IconDefinition = faTrash;
  iconModifier: IconDefinition = faEdit;
  titre = 'Page lalekou';
  etudiants: Observable<Array<Etudiant>>;
  motCle = '';

  objectComplexe = [
    { nom: 'test1', marque: 'jejerh' },
    { nom: 'test2', marque: 'jejerh' },
    { nom: 'test3', marque: 'jejerh' }
  ];
  chaine = "bonjour graytchad";
  nombre = 1000000;

  constructor(
    private readonly service: RecuperationDataService,
    private readonly router: Router,
    private readonly modalService: NgbModal) { }

  ngOnInit(): void {
    this.etudiants = this.getData();
  }

  afficher(path: string, id: number): void {
    this.router.navigate([path, id]);
  }

  supprimer (id: number) {
    const ref = this.modalService.open(ModalSuppressionComponent, 
      { ariaLabelledBy: 'modal-basic-title', });
      ref.componentInstance.data = {
        titre: 'Suppression d\'un étudiant', 
        message: 'Etes-vous sur de vouloir supprimer cet étudiant ?'}
      ref.result.then((result) => {
      // fermeture de la modal avec succes
      console.log('suppression de l\'etudiant avec l\'id', id);
    }, (reason) => {
      console.log('fermeture pour autre cause');
      // fermeture anormale avec la valeur reason
    });
  }
  modifier(id: number) {
    this.router.navigate(['list/modifier', id]);
  }

  getData(): Observable<Array<Etudiant>> {
    return this.service.getEtudiants();
  }
}


