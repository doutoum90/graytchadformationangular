import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './core/not-found/not-found.component';

const mesRoutes: Routes = [
  { path: 'home', loadChildren: () => import('./homedir/home.module').then(m => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./aboutdir/about.module').then(m => m.AboutModule) },
  { path: 'contact', loadChildren: () => import('./contactdir/contact.module').then(m => m.ContactModule) },
  { path: 'list', loadChildren: () => import('./etudiantdir/etudiant.module').then(e => e.EtudiantModule) },
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
