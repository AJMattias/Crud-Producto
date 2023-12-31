import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:4000/api/productos/'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200' })
  };

  constructor(private http: HttpClient) {
  
  }
  
  getProductos():Observable<any>{
    this.httpOptions = {
      headers: new HttpHeaders().set('Access-Control-Allow-Origin:', '*')
    };
    return this.http.get(this.url);
  }
  
  deleteProducto(id: string): Observable<any> {
    return this.http.delete(this.url + id)
  } 

  guardarProducto(producto: Producto): Observable<any>{
    return this.http.post(this.url, producto)
  }

  obtenerProducto(id: string): Observable<any>{
    return this.http.get(this.url + id)
  }

  editarProducto(id: string, producto: Producto): Observable<any> {
    return this.http.put(this.url + id, producto)
  }

}
