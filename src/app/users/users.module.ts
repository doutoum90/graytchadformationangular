import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConnexionComponent } from './connexion/connexion.component';
import { ChangerMDPComponent } from './changer-mdp/changer-mdp.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [
    ConnexionComponent,
    InscriptionComponent,
    ChangerMDPComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
/*     FontAwesomeModule,
    HttpClientModule, */
  ],
  exports: []
})
export class UsersModule { }
