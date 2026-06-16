import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para realizar llamadas HTTP

@Injectable({
  providedIn: 'root',
})
export class Producto {

  public apiUrl: string = 'http://localhost:8080'; // URL de la API 

  constructor(private http: HttpClient) {
  
  }

  // Método para obtener productos desde la API
  getProductos() {
    return this.http.get(`${this.apiUrl}/productos`); // Realiza una solicitud GET a la API para obtener los productos
  }


  getProductoById(id: number) {
    return this.http.get(`${this.apiUrl}/productos/${id}`); // Realiza una solicitud GET a la API para obtener un usuario por su ID
  }


  createProducto(producto: any) {

    const opciones = {
      headers: {
        'Content-Type': 'application/json' // Especifica que el contenido de la solicitud es JSON
      }
    };

    return this.http.post(`${this.apiUrl}/productos`, producto, opciones); // Realiza una solicitud POST a la API para crear un nuevo producto
  }
}
