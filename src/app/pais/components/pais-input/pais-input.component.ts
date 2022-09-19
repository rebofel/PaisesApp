import { Component, EventEmitter, Output, Input, OnInit} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{


  
  @Output() onEnter: EventEmitter<string> = new EventEmitter() //Evento de salida para que dispare la busqueda hacia el componente Por Pais Component
  @Output() onDebounce: EventEmitter<string> = new EventEmitter() 
  
  @Input() placeholder: string = "";

  debouncer: Subject<string> = new Subject();
  
  termino: string="";
  

  ngOnInit()  {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( valor => {
      this.onDebounce.emit(valor);
    })
  }


  buscar(): void{
    this.onEnter.emit(this.termino); //Emitiendo el evento de salida
  }
  
  teclaPresionada(event: any) {
 
    this.debouncer.next(this.termino);
  }


}
