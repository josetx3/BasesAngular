import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';

import {BrowserModule} from '@angular/platform-browser';

import {HeroesModule} from "./modules/heroes/heroes.module";
import {CounterModule} from "./modules/counter/counter.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
