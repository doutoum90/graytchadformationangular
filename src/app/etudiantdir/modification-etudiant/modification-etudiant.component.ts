import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecuperationDataService } from 'src/app/services/recuperation-data.service';
import { Observable } from 'rxjs';
import { Etudiant } from '../../models/etudiant.model';
import { Store, select } from '@ngrx/store';
import {  selectFeatureEtudiant, EtudiantsFeature } from '../store/selectors/etudiant.selectors';
import { loadEtudiant } from '../store/actions/etudiants.actions';
import { EtudiantState } from '../store/reducers/etudiant.reducer';

@Component({
  selector: 'gray-modification-etudiant',
  templateUrl: './modification-etudiant.component.html',
  styleUrls: ['./modification-etudiant.component.scss']
})
export class ModificationEtudiantComponent implements OnInit {

  etudiant$: Observable<Etudiant>;
  constructor(private readonly activated: ActivatedRoute,
    private readonly store: Store<EtudiantsFeature>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadEtudiant({ id: Number(this.activated.snapshot.params.id) }));
    this.etudiant$ = this.store.pipe(select(selectFeatureEtudiant));

    // = this.etudiantService.getEtudiant();
  }

}
