import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisREST } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  //FetchAPI Es una opcion para hacer peticiones HTTP, pero se usara el propio de angular
  // que es el HttpClient. Importamos el modulo en app module, para que sea generalizado

  constructor( private http: HttpClient) { }

  buscarPais( termino: string ): Observable<PaisREST[]>{
    
    const url = `${ this.apiUrl }/name/${termino}`;
    
    return this.http.get<PaisREST[]>(url); //el get es de tipo observable, por lo que RETORNAMOS como un observable. A su vez Observable es un GENERIC. Por el momento devolvemos ANY para que no marque error
 
  }

  buscarCapital( termino: string ): Observable<PaisREST[]>{
      
      const url = `${ this.apiUrl }/capital/${termino}`;
      
      return this.http.get<PaisREST[]>(url); //el get es de tipo observable, por lo que RETORNAMOS como un observable. A su vez Observable es un GENERIC. Por el momento devolvemos ANY para que no marque error
  
    }

    getPaisPorAlpha( id: string ): Observable<PaisREST>{
      
      const url = `${ this.apiUrl }/alpha/${id}`;
      
      return this.http.get<PaisREST>(url); //retorna solo un pais no un arreglo
  
    }

}
