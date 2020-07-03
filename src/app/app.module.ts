import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LalekouComponent } from './comps/lalekou/lalekou.component';

@NgModule({
  declarations: [
    AppComponent,
    LalekouComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
