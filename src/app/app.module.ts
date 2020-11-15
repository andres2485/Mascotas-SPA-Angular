import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';
import {MascotasService} from './servicios/mascotas.service';
import { MascotaComponent } from './components/mascota/mascota.component';
import { BuscadorComponent } from './components/buscador/buscador.component';  // importar manualmente los servicios


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MascotasComponent,
    MascotaComponent,
    BuscadorComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MascotasService  // poner tambien en provider los servicios

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
