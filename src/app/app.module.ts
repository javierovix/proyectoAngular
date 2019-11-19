import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MisHistoriasComponent } from './mis-historias/mis-historias.component';
import { routing } from './app.routes';
import { DatosPersonalesComponent } from './mis-historias/datos-personales/datos-personales.component';
import { MisCosasComponent } from './mis-cosas/mis-cosas.component';
import { MisAmigosComponent } from './mis-amigos/mis-amigos.component';
import { EventosComponent } from './eventos/eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MisHistoriasComponent,
    DatosPersonalesComponent,
    MisCosasComponent,
    MisAmigosComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
