import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { Routes, RouterModule, ROUTES } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { MisHistoriasComponent } from './mis-historias/mis-historias.component';
import { MisCosasComponent } from './mis-cosas/mis-cosas.component';
import { MisAmigosComponent } from './mis-amigos/mis-amigos.component';
import { EventosComponent } from './eventos/eventos.component';

const routes: Routes = [
    { path: '', component:MisHistoriasComponent},
    { path: 'home', component:MisHistoriasComponent},
    { path: 'cabecera', component:CabeceraComponent},
    { path: 'mis-cosas', component:MisCosasComponent},
    { path: 'mis-amigos', component:MisAmigosComponent},
    { path: 'eventos', component:EventosComponent}
  ];

  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);