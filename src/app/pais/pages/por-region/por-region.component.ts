import { Component } from '@angular/core';
import { PaisREST } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [` button {  margin-right: 5px; } ` ]
})
export class PorRegionComponent {

  regiones: string[] = ["africa", "americas", "asia", "europe", "oceania"];
  regionActiva: string = "";
  paises: PaisREST[] = [];
  
  constructor( private paisService: PaisService) { }

  activarRegion (region: string) {
    if (region === this.regionActiva) {return;} // Si la region está seleccionada, no retorna nada, asi no está llamando a la API al pedo nuevamente 
    this.regionActiva = region; 
    this.paises = []; // Limpiar al array de 
    
    this.paisService.buscarRegion(region).subscribe( paises => {
      this.paises = paises;
    });


  }

  getClaseCSS(region:string): string {
    return (region === this.regionActiva) // Si la region es igual a la region activa
    ? 'btn btn-primary'  //Mostrará el boton activo
    : 'btn btn-outline-primary'; // Mostrará el boton inactivo
  }


  


}

