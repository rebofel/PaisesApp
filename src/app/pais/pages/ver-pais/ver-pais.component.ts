import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { PaisREST } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  
  pais!: PaisREST; // ! Pais puede ser NULO

  constructor ( 
    private activatedRoute: ActivatedRoute, 
    private paisService: PaisService
    ) { }

  ngOnInit(): void {


    this.activatedRoute.params
    .pipe(
     
      switchMap( ( { id } ) => this.paisService.getPaisPorAlpha(id)),
      tap(console.log)
    
      )

    .subscribe( pais => this.pais = pais); // Me suscribo a cualquier ID que venga en la URL. Se declaró en APP ROUTING



    //Metodo alternativo sin RXJS
//     this.activatedRoute.params.subscribe(({id})=>{
//       console.log(id); //Adquiero el ID del objeto

//       this.paisService.getPaisPorAlpha("id")
//       .subscribe(pais=>{
//         console.log(pais);
//       })

// });

  }
}
