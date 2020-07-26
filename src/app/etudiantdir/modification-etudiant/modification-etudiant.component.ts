import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectFeatureEtudiant, EtudiantsFeature } from '../store/selectors/etudiant.selectors';
import { loadEtudiant, updateEtudiant } from '../store/actions/etudiants.actions';
import { FormGroup, FormBuilder } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Etudiant } from 'src/app/models/etudiant.model';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'gray-modification-etudiant',
  templateUrl: './modification-etudiant.component.html',
  styleUrls: ['./modification-etudiant.component.scss']
})
export class ModificationEtudiantComponent implements OnInit {
  modificationFormulaire: FormGroup;
  etudiant$: Observable<any>;
  constructor(private readonly activated: ActivatedRoute,
    private readonly store: Store<EtudiantsFeature>,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadEtudiant({ id: Number(this.activated.snapshot.params.id) }));
    this.modificationFormulaire = this.formBuilder.group({
      id: this.formBuilder.control(''),
      nom: this.formBuilder.control(''),
      prenom: this.formBuilder.group({
        prenom1: this.formBuilder.control(''),
        prenom2: this.formBuilder.control(''),
      }),
      age: this.formBuilder.control(''),
      dateNaissance: this.formBuilder.control(''),
      fraisSubsistance: this.formBuilder.control(''),
      note: this.formBuilder.control(''),
    });
    this.etudiant$ = this.store.pipe(
      select(selectFeatureEtudiant),
      tap(etudiant => {
        console.log(etudiant);
        this.modificationFormulaire.patchValue(
          { ...etudiant, dateNaissance: this.formatDate(etudiant?.dateNaissance) });
      }
      ));
  }
  modifierEtudiant() {
    const etudiant: Update<Etudiant> = {
      id: this.modificationFormulaire.value.id,
      changes: this.modificationFormulaire.value
    };
    this.store.dispatch(updateEtudiant({ etudiant }))
  }

  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  get prenom() {
    return this.modificationFormulaire.get('prenom');
  }

  reinit() {
    this.modificationFormulaire.reset();
  }
}
