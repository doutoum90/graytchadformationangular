import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConnexionComponent } from './connexion/connexion.component';
import { ChangerMDPComponent } from './changer-mdp/changer-mdp.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { UsersRoutingModule } from './users-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromUsers from './store/reducers/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/effects/users.effects';


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
    StoreModule.forFeature(fromUsers.usersFeatureKey, fromUsers.reducer),
    EffectsModule.forFeature([UsersEffects]),
/*     FontAwesomeModule,
    HttpClientModule, */
  ],
  exports: []
})
export class UsersModule { }
