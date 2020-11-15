import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MascotasService} from '../../servicios/mascotas.service'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  mascotas:any[]=[];
  termino:string;


  constructor(private activateRoute:ActivatedRoute,
              private _mascotasServices:MascotasService
    ) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(params =>{


      this.termino =params['termino'];
    
    this.mascotas= this._mascotasServices.buscarMascotas(params['termino']);
    console.log(this.mascotas);
    })
  }

}
