import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LalekouComponent } from './comps/lalekou/lalekou.component';
import { GrayTchadComponent } from './comps/gray-tchad/gray-tchad.component';
import { FormsModule } from '@angular/forms';
import { FiltrePipe } from './pipes/filtre.pipe';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './comps/home/home.component';
import { AboutComponent } from './comps/about/about.component';
import { ContactComponent } from './comps/contact/contact.component';
import { NotFoundComponent } from './comps/not-found/not-found.component';
import { ListStudentComponent } from './comps/list-student/list-student.component';
import { HeaderComponent } from './comps/header/header.component';
import { FooterComponent } from './comps/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LalekouComponent,
    GrayTchadComponent,
    FiltrePipe,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    ListStudentComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
