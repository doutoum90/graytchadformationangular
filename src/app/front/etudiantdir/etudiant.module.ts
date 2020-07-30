import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentComponent } from './list-student/list-student.component';
import { LalekouComponent } from './lalekou/lalekou.component';
import { EtudiantRoutingModule } from './etudiant-routing.module';
import { FiltrePipe } from '../pipes/filtre.pipe';
import { InverserPipe, AgeFrPipe } from '../pipes/inverser.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import { ModificationEtudiantComponent } from './modification-etudiant/modification-etudiant.component';
import { MajusculeDirective } from '../directives/majuscule.directive';
import { NombreDirective } from '../directives/nombre.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import * as fromEtudiant from './store/reducers/etudiant.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EtudiantEffects } from './store/effects/etudiant.effects';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    ListStudentComponent,
    LalekouComponent,
    FiltrePipe,
    InverserPipe,
    AgeFrPipe,
    MajusculeDirective,
    AjoutEtudiantComponent,
    NombreDirective,
    ModificationEtudiantComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EtudiantRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    StoreModule.forFeature(fromEtudiant.etudiantFeatureKey, fromEtudiant.reducer),
    EffectsModule.forFeature([EtudiantEffects])
  ],
  exports: [
    ListStudentComponent,
    LalekouComponent,
    FiltrePipe
  ]
})
export class EtudiantModule { }
