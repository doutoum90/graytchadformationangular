import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LalekouComponent } from './comps/lalekou/lalekou.component';
import { GrayTchadComponent } from './comps/gray-tchad/gray-tchad.component';

import { HomeComponent } from './comps/home/home.component';
import { AboutComponent } from './comps/about/about.component';
import { ContactComponent } from './comps/contact/contact.component';
import { NotFoundComponent } from './comps/not-found/not-found.component';
import { ListStudentComponent } from './comps/list-student/list-student.component';

const mesRoutes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'list', component: ListStudentComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(mesRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
