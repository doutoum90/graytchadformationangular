import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store, select } from '@ngrx/store';
import { EtudiantsFeature, selectFeatureEtudiants } from '../store/selectors/etudiant.selectors';
import { ModalSuppressionComponent } from 'src/app/core/modal-suppression/modal-suppression.component';
import { deleteEtudiant, loadEtudiants } from '../store/actions/etudiants.actions';
import { LalekouComponent } from '../lalekou/lalekou.component';

@Component({
  selector: 'gray-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit, AfterViewInit {
  etudiants$: Observable<any>;
  nombreTotal$: Observable<number>;
  capacite = 10;
  numeroPage = 1;
  @ViewChild('tableauEtudiant', { read: ViewContainerRef }) tableauEtudiant: ViewContainerRef;
  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly router: Router,
    private readonly modalService: NgbModal,
    private readonly store: Store<EtudiantsFeature>
  ) { }


  ngOnInit(): void {
    this.propager({ numeroPage: this.numeroPage, capacite: this.capacite });
    this.etudiants$ = this.store.pipe(select(selectFeatureEtudiants));
    this.nombreTotal$ = this.store.pipe(select(v => v.etudiant.nombreTotal));
  }
  ngAfterViewInit() {
    // monContainer
    /* const lalekouRef =this.tableauEtudiant.createComponent(
      this.componentFactoryResolver
      .resolveComponentFactory(LalekouComponent)
      );

      lalekouRef.instance.etudiants$ = this.etudiants$;
      lalekouRef.instance.capacite = this.capacite;
      lalekouRef.instance.nombreTotal$ = this.nombreTotal$;
      lalekouRef.instance.numeroPage = this.numeroPage;
      lalekouRef.instance.afficheEvent.subscribe((event)=>this.afficher(event));
      lalekouRef.instance.supprimeEvent.subscribe((event)=>this.supprimer(event));
      lalekouRef.instance.detailEvent.subscribe((event)=>this.detail(event));
      lalekouRef.instance.modifieEvent.subscribe((event)=>this.modifier(event));
      lalekouRef.instance.propagerEvent.subscribe((event)=>this.propager(event)); */
  }

  afficher(event): void {
    this.router.navigate([event.path, event.id]);
  }
  supprimer(event) {
    const ref = this.modalService.open(ModalSuppressionComponent,
      { ariaLabelledBy: 'modal-basic-title', });
    ref.componentInstance.data = {
      titre: 'Suppression d\'un étudiant',
      message: 'Etes-vous sur de vouloir supprimer cet étudiant ?'
    }
    ref.result.then((result) => {
      // fermeture de la modal avec succes
      this.store.dispatch(deleteEtudiant({ id: event.id }));
      this.propager({ numeroPage: this.numeroPage, capacite: this.capacite });
    }, (reason) => {
      console.log('fermeture pour autre cause');
      // fermeture anormale avec la valeur reason
    });
  }

  modifier(event) {
    this.router.navigate(['list/modifier', event.id]);
  }
  detail(event) {
    this.router.navigate(['list/detail', event.id]);
  }

  propager(event) {
    this.store.dispatch(loadEtudiants({ numeroPage: event.numeroPage, capacite: event.capacite }));
  }

}
