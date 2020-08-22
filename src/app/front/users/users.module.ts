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
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';


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
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    StoreModule.forFeature(fromUsers.usersFeatureKey, fromUsers.reducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
  exports: []
})
export class UsersModule { }
