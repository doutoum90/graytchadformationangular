import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

const mesRoutes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./admin/admin.module').then(e => e.AdminModule) },
  { path: '', loadChildren: () => import('./front/front.module').then(m => m.FrontModule) },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(mesRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
