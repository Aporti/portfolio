import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoplurComponent } from './doplur/doplur.component';
import { HomeComponent } from './home/home.component';
import { InnocuousComponent } from './innocuous/innocuous.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TtcComponent } from './ttc/ttc.component';

@NgModule({
  declarations: [
    AppComponent,
    DoplurComponent,
    HomeComponent,
    InnocuousComponent,
    NotFoundComponent,
    TtcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
