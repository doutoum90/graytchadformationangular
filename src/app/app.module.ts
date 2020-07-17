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
import { ConnexionComponent } from './core/connexion/connexion.component';
import { InscriptionComponent } from './core/inscription/inscription.component';
import { ModalSuppressionComponent } from './core/modal-suppression/modal-suppression.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ConnexionComponent,
    InscriptionComponent,
    ModalSuppressionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AboutModule,
    ContactModule,
    EtudiantModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
