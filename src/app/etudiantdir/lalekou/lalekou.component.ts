import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { RecuperationDataService } from '../../services/recuperation-data.service';
import { faSearch, faTrash, faEdit, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalSuppressionComponent } from 'src/app/core/modal-suppression/modal-suppression.component';
import { Etudiant } from '../../models/etudiant.model';
import { Store, select } from '@ngrx/store'
import { selectFeatureEtudiants, EtudiantsFeature } from '../store/selectors/etudiant.selectors';
import { loadEtudiants } from '../store/actions/etudiants.actions';

@Component({
  selector: 'gray-lalekou',
  templateUrl: './lalekou.component.html',
  styleUrls: ['./lalekou.component.scss']
})
export class LalekouComponent implements OnInit {
  iconSuppr: IconDefinition = faTrash;
  iconModifier: IconDefinition = faEdit;
  iconZoom: IconDefinition = faSearch;
  etudiants$: Observable<any>;
  motCle = '';
  constructor(
    private readonly service: RecuperationDataService,
    private readonly router: Router,
    private readonly modalService: NgbModal,
    private readonly store: Store<EtudiantsFeature>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadEtudiants());
    this.etudiants$ = this.store.pipe(select(selectFeatureEtudiants));
  }

  afficher(path: string, id: number): void {
    this.router.navigate([path, id]);
  }

  supprimer(id: number) {
    const ref = this.modalService.open(ModalSuppressionComponent,
      { ariaLabelledBy: 'modal-basic-title', });
    ref.componentInstance.data = {
      titre: 'Suppression d\'un étudiant',
      message: 'Etes-vous sur de vouloir supprimer cet étudiant ?'
    }
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
  detail(id: number) {
    // this.router.navigate(['list/modifier', id]);
  }

  getData(): Observable<Array<Etudiant>> {
    return this.service.getEtudiants();
  }
}


