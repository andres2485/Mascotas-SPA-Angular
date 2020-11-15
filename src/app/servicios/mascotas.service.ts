import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  private mascotas:Mascota[]= [  // aca en MASCOTA[] lo saco de la interfaz de mas abajo y seria un array de Mascota con sus atributos
    {
      nombre: "Zafradita",
      bio: "zafradita es el grande del hogar",
      img: "assets/img/zafrada2.png",
       casa:"n"
    },
    {
      nombre: "Chan",
      bio: "gatito muy delicadito",
      img: "assets/img/chan1.png",  
      casa:"a"
    },
    {
      nombre: "Sordi",
      bio: "Lo mas lindo del Planeta",
      img: "assets/img/sordi3.png",
      casa: "a"
    },
    {
      nombre: "Gastona",
      bio: "Gatita Rip",
      img: "assets/img/gastona.png",
      casa: "n"
    }
    ,
    {
      nombre: "Mammi",
      bio: "Gatita Rip",
      img: "assets/img/mami.png",
      casa: "n"
    }
   
    
    
  ];

  constructor() {

    console.log("servicio listo para usarse");
   }

   getMascotas(){
      return this.mascotas;  // devualve a las mascotas


   }

   getMascota(idx:string){  // devuelve la mascota seleccionada y muestra la Info
 return this.mascotas[idx];

   }

buscarMascotas(termino:string):Mascota[]{


  let mascotasArr:Mascota[]=[];
termino = termino.toLowerCase();

    for( let mascota of this.mascotas){
        
        let nombre= mascota.nombre.toLowerCase();
        if(nombre.indexOf(termino) >=0){
          
          mascotasArr.push(mascota)

        }

    }
        return mascotasArr;
}


}


export interface Mascota{  // aca creo una interface o model que es como una clase

  nombre:string;
  bio:string;
  img:string;
  casa:string;



}