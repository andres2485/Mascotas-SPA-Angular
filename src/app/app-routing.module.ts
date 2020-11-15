import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HomeComponent } from './components/home/home/home.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';

const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'mascotas', component:MascotasComponent},
  {path:'mascota/:id', component:MascotaComponent},
  {path:'buscar/:termino', component:BuscadorComponent},
  {path:'', pathMatch:'full', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash:true})],  // el usehash para poner # en la url
  exports: [RouterModule]
})
export class AppRoutingModule { }
