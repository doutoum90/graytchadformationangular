import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationGuard } from './guards/authentification.guard';
import { FrontComponent } from './front/front.component';

const mesRoutes: Routes = [
  {
    path: '', component: FrontComponent, children: [
      { path: 'home', loadChildren: () => import('./homedir/home.module').then(m => m.HomeModule), data: { animation: '1' } },
      { path: 'about', loadChildren: () => import('./aboutdir/about.module').then(m => m.AboutModule), data: { animation: '2' } },
      { path: 'contact', loadChildren: () => import('./contactdir/contact.module').then(m => m.ContactModule), data: { animation: '3' } },
      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), data: { animation: '4' } },
      { path: 'list', canActivate: [AuthentificationGuard], loadChildren: () => import('./etudiantdir/etudiant.module').then(e => e.EtudiantModule), data: { animation: '5' } },
      { path: '', redirectTo: 'home', pathMatch: 'full', data: { animation: '1' } },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(mesRoutes)
  ],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
