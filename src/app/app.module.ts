import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LalekouComponent } from './comps/lalekou/lalekou.component';
import { GrayTchadComponent } from './comps/gray-tchad/gray-tchad.component';
import { FormsModule } from '@angular/forms';
import { FiltrePipe } from './pipes/filtre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LalekouComponent,
    GrayTchadComponent,
    FiltrePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
