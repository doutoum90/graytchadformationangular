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
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDAEz4aO0tkY-4IOkJ-WNF7h5pvWOZmQUg",
  authDomain: "giraytchad-tchad.firebaseapp.com",
  databaseURL: "https://giraytchad-tchad.firebaseio.com",
  projectId: "giraytchad-tchad",
  storageBucket: "giraytchad-tchad.appspot.com",
  messagingSenderId: "122861333274",
  appId: "1:122861333274:web:92b288c6fb527fdcf6daa3",
  measurementId: "G-RM60ENNMTG"
};

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
    FormsModule,
    ReactiveFormsModule,
    AboutModule,
    ContactModule,
    EtudiantModule,
    HomeModule,
    UsersModule,
    AdminModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ]
})
export class FrontModule { }
