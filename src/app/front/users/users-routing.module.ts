import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { ChangerMDPComponent } from './changer-mdp/changer-mdp.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
    { component: ConnexionComponent, path: 'connexion', pathMatch: 'full', data:{ animation: '1' } },
    { component: ChangerMDPComponent, path: 'changerMDP', pathMatch: 'full', data:{ animation: '1' } },
    { component: InscriptionComponent, path: 'inscription', pathMatch: 'full' , data:{ animation: '1' }},
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
