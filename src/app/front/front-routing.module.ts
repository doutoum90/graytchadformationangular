import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationGuard } from './guards/authentification.guard';
import { FrontComponent } from './front/front.component';

const mesRoutes: Routes = [
  {
    path: '', component: FrontComponent, children: [
      { path: 'home', loadChildren: () => import('./homedir/home.module').then(m => m.HomeModule) },
      { path: 'about', loadChildren: () => import('./aboutdir/about.module').then(m => m.AboutModule) },
      { path: 'contact', loadChildren: () => import('./contactdir/contact.module').then(m => m.ContactModule) },
      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
      { path: 'list', canActivate: [AuthentificationGuard], loadChildren: () => import('./etudiantdir/etudiant.module').then(e => e.EtudiantModule) },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
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
