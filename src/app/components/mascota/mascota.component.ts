import { Component,  } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import{MascotasService} from "../../servicios/mascotas.service"  // importamos elservicio
import { MascotasComponent } from '../mascotas/mascotas.component';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent  {

    mascota:any={};   // creamos un objeto para que devuelva la mascota

  constructor(private activateRoute:ActivatedRoute,
              private _mascotasService: MascotasService
    ) { 

  this.activateRoute.params.subscribe(params=>{ // este constructor es para que me devuelva segun el gato el id ya sea 0 1 2

    //console.log(params['id']);  // 
    this.mascota = this._mascotasService.getMascota(params['id']);
    console.log(this.mascota);
  
  });

  }


}

// quitamos el oninit para iniciar de otra manera en las mascotas info