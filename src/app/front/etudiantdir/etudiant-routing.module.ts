import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentComponent } from './list-student/list-student.component';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import { ModificationEtudiantComponent } from './modification-etudiant/modification-etudiant.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { component: ListStudentComponent, path: '', pathMatch: 'full' },
  { component: AjoutEtudiantComponent, path: 'ajouter', pathMatch: 'full' },
  { component: ModificationEtudiantComponent, path: 'modifier/:id', pathMatch: 'full' },
  { component: DetailComponent, path: 'detail/:id', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
