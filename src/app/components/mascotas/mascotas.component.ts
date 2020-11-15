import { Component, OnInit } from '@angular/core';
import {MascotasService, Mascota} from '../../servicios/mascotas.service';  // se importa el servicio aca igual
import{Router} from '@angular/router';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

mascotas:Mascota []=[];  // MASCOTA[] lo saco de interface de service , en ves de any se pone eso

  constructor(private _mascotaService:MascotasService,
              private router: Router // aca
    ) { }

  ngOnInit(){

    this.mascotas =this._mascotaService.getMascotas();  // aca muestro en consola el array de las mascotas de servicio

   // console.log(this.mascotas);

  }

  verMascota(idx:number){
    
this.router.navigate(  ['/mascota',idx])

   // console.log(idx);    // funcion para el boton de ver mascota en mascotas


  }

}
