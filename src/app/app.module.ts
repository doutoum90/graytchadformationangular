import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AboutModule } from './aboutdir/about.module';
import { ContactModule } from './contactdir/contact.module';
import { EtudiantModule } from './etudiantdir/etudiant.module';
import { HomeModule } from './homedir/home.module';
import { ConnexionComponent } from './users/connexion/connexion.component';
import { InscriptionComponent } from './users/inscription/inscription.component';
import { ModalSuppressionComponent } from './core/modal-suppression/modal-suppression.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ChangerMDPComponent } from './users/changer-mdp/changer-mdp.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ConnexionComponent,
    InscriptionComponent,
    ModalSuppressionComponent,
    ChangerMDPComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AboutModule,
    ContactModule,
    EtudiantModule,
    HomeModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
