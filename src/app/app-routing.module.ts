import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const mesRoutes: Routes = [
  { path: '', loadChildren: () => import('./front/front.module').then(m => m.FrontModule) },
  { path: 'dashboard', loadChildren: () => import('./admin/admin.module').then(e => e.AdminModule) },
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(mesRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
