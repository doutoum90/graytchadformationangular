import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from '../core/not-found/not-found.component';
import { HeaderComponent } from '../core/header/header.component';
import { FooterComponent } from '../core/footer/footer.component';
import { AboutModule } from './aboutdir/about.module';
import { ContactModule } from './contactdir/contact.module';
import { EtudiantModule } from './etudiantdir/etudiant.module';
import { HomeModule } from './homedir/home.module';
import { ModalSuppressionComponent } from '../core/modal-suppression/modal-suppression.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersModule } from './users/users.module';
import { AdminModule } from '../admin/admin.module';
import { FrontComponent } from './front/front.component';
import { FrontRoutingModule } from './front-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    FrontComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ModalSuppressionComponent,
  ],
  imports: [
    FrontRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AboutModule,
    ContactModule,
    EtudiantModule,
    HomeModule,
    UsersModule,
    AdminModule,
  ]
})
export class FrontModule { }
