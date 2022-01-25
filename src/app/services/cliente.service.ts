import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Cliente } from '../models/cliente';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  id!:number;

  private urlEndPoint:string ='http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    //return of(CLIENTES);
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }

  crear(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint,cliente,{headers:this.httpHeaders});
  }

  getCliente(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }

  modificar(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente,{headers: this.httpHeaders});
  }

  eliminar(id:number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders});
  }


  subirFoto(archivo: File, id: any): Observable<Cliente>{
     let formData = new FormData();
     formData.append("archivo", archivo);
     formData.append("id",id);
     return this.http.post(`${this.urlEndPoint}/upload`,formData).pipe(
       map((response: any)=> response.cliente as Cliente),
       catchError(e =>{
         console.error(e.error.mensaje);
         Swal.fire(e.error.mensaje,e.error.erro, 'error');
         return throwError(e);
       })
     );
  }


  verReferidos(id:number):Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.urlEndPoint}/referidos/${id}`).pipe(
      catchError(e=>{
        if(e.status == 404){
          Swal.fire('Atencion', `No poses ningun referido `, 'info');
          return throwError(e);
        }
       // this.IsNoautorizado(e);
        return throwError(e);
        
        }));
  }

}
