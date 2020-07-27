import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { RecuperationDataService } from '../../services/recuperation-data.service';
import { faSearch, faTrash, faEdit, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalSuppressionComponent } from 'src/app/core/modal-suppression/modal-suppression.component';
import { Etudiant } from '../../models/etudiant.model';
import { Store, select } from '@ngrx/store'
import { selectFeatureEtudiants, EtudiantsFeature, selectEtudiantTotal } from '../store/selectors/etudiant.selectors';
import { loadEtudiants, deleteEtudiant } from '../store/actions/etudiants.actions';
import { mergeMap, map, debounceTime } from 'rxjs/operators';

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
  capacite = 10;
  numeroPage = 1;
  nombreTotal$: Observable<number>;
  inputEvent: Observable<any>;
  @ViewChild('input') input: ElementRef;
  constructor(
    private readonly service: RecuperationDataService,
    private readonly router: Router,
    private readonly modalService: NgbModal,
    private readonly store: Store<EtudiantsFeature>
  ) { }
  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keydown')
      .pipe(
        debounceTime(500),
        map((data: any) => data.target.value),
        mergeMap(v => {
          return this.service.getEtudiantbyName(v, this.numeroPage, this.capacite);
        })).subscribe((v: any) => console.log(v));
  }

  ngOnInit(): void {
    this.propager(this.numeroPage, this.capacite);
    this.etudiants$ = this.store.pipe(select(selectFeatureEtudiants));
    this.nombreTotal$ = this.store.pipe(select(v => v.etudiant.nombreTotal));
  }

  afficher(path: string, id: number): void {
    this.router.navigate([path, id]);
  }

  range(fin: number) {
    return Array.from({ length: fin }, (v, k) => k + 1);
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
      this.store.dispatch(deleteEtudiant({ id }));
      this.propager(this.numeroPage, this.capacite);
    }, (reason) => {
      console.log('fermeture pour autre cause');
      // fermeture anormale avec la valeur reason
    });
  }

  modifier(id: number) {
    this.router.navigate(['list/modifier', id]);
  }
  detail(id: number) {
    this.router.navigate(['list/detail', id]);
  }
  suivant(nb: number) {
    if (this.numeroPage < nb) {
      this.numeroPage++;

      this.propager(this.numeroPage, this.capacite);
    }
  }

  precedent() {
    if (this.numeroPage > 1) {
      this.numeroPage--;

      this.propager(this.numeroPage, this.capacite);
    }
  }

  allerA(nb: number) {
    this.numeroPage = nb;
    this.propager(this.numeroPage, this.capacite);
  }

  private propager(numeroPage, capacite) {
    this.store.dispatch(loadEtudiants({ numeroPage, capacite }));
  }
}


