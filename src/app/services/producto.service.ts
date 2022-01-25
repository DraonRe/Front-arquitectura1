import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlEndPoint:string ='http://localhost:8090/api/productos';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }

  listar():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlEndPoint);
  }

  listarPagina(page:string, size:string):Observable<any>{
    const params = new HttpParams().set('page',page).set('size',size);
    return this.http.get<any>(`${this.urlEndPoint}/pagina`,{params:params});
  }

  ver(id:number):Observable<Producto>{
    return this.http.get<Producto>(`${this.urlEndPoint}/${id}`);
  }

  crear(producto:Producto):Observable<Producto>{
    return this.http.post<Producto>(this.urlEndPoint,producto,{headers: this.httpHeaders});
  }

  modificar(producto:Producto):Observable<Producto>{
    return this.http.put<Producto>(`${this.urlEndPoint}/${producto.id}`, producto,{headers: this.httpHeaders});
  }

  eliminar(id:number): Observable<void>{
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
  }

  crearConImagen(producto:Producto, archivo:File): Observable<Producto>{
    const formData = new FormData();
    formData.append('archivo',archivo);
    formData.append('codigo',producto.codigo);
    formData.append('nombre',producto.nombre);
    formData.append('precio',producto.precio.toString());
    return this.http.post<Producto>(this.urlEndPoint + '/crear-con-imagen',formData);
  }

  modificarConImagen(producto:Producto, archivo:File): Observable<Producto>{
    const formData = new FormData();
    formData.append('archivo',archivo);
    formData.append('codigo',producto.codigo);
    formData.append('nombre',producto.nombre);
    formData.append('precio',producto.precio.toString());
    return this.http.put<Producto>(`${this.urlEndPoint}/editar-con-imagen/${producto.id}`,formData);
  }
}
