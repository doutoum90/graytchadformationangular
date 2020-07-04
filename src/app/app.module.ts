import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LalekouComponent } from './comps/lalekou/lalekou.component';
import { GrayTchadComponent } from './comps/gray-tchad/gray-tchad.component';

@NgModule({
  declarations: [
    AppComponent,
    LalekouComponent,
    GrayTchadComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
