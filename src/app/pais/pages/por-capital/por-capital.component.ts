import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { PaisREST } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-por-pais',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{
  
  termino: string=""; 
  hayError: boolean = false;
  paises : PaisREST[] = [];
  capitales: PaisREST[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino).subscribe( (paises) => {

      this.paises = paises;
    },
    (err) => {
      this.hayError = true;
      this.paises= [];});  
  }

}
