import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { EtudiantsFeature, selectFeatureEtudiant } from '../store/selectors/etudiant.selectors';
import { loadEtudiant } from '../store/actions/etudiants.actions';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Etudiant } from 'src/app/front/models/etudiant.model';

@Component({
  selector: 'gray-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  etudiant$: Observable<Etudiant>;
  constructor(private readonly activated: ActivatedRoute,
    private readonly store: Store<EtudiantsFeature>) { }


  ngOnInit(): void {
    this.store.dispatch(loadEtudiant({ id: Number(this.activated.snapshot.params.id) }));
    this.etudiant$ = this.store.pipe(select(selectFeatureEtudiant))
  }

}
