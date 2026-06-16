import { Component } from '@angular/core';
import { Producto } from '../../services/producto'; // Importa el servicio Usuario para usarlo en este componente
import { FormsModule } from '@angular/forms';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk"; // Importa FormsModule para usar ngModel en el template

@Component({
  selector: 'app-usuarios-http',
  imports: [FormsModule], // Asegúrate de importar FormsModule para usar ngModel en el template
  templateUrl: './usuarios-http.html',
  styleUrl: './usuarios-http.css',
})
export class UsuariosHTTP {


  public productos: any; // Variable para almacenar los productos obtenidos de la API
  public productoSeleccionado: any; // Variable para almacenar el producto seleccionado por su ID
  public productoId: number = 1; // Variable para almacenar el ID del producto que se desea buscar


  // El constructor del componente, donde se inyecta el servicio Producto para poder usarlo en este componente
  constructor(private productoService: Producto) {// Inyecta el servicio Producto para poder usarlo en este componente
    console.log("productoService in UsuariosHTTP:", this.productoService); // Imprime el servicio en la consola para verificar que se ha inyectado correctamente
  }


  ngOnInit() {

    this.buscarProducto(); // Llama al método para buscar un producto por su ID al iniciar el componente

    this.productos = this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data; // Almacena los productos obtenidos de la API en la variable productos
        console.log("Productos obtenidos:", this.productos); // Imprime los productos en la consola para verificar que se han obtenido correctamente
      },
      error: (error) => {
        console.error("Error al obtener productos:", error); // Maneja cualquier error que ocurra al obtener los productos
      },
      complete: () => {
        console.log("Solicitud de productos completada."); // Indica que la solicitud de productos se ha completado
      }
    });
  }


  // Método para buscar un producto por su ID
  buscarProducto() {
    this.productoSeleccionado = this.productoService.getProductoById(this.productoId).subscribe({
      next: (data) => {
        this.productoSeleccionado = data; // Almacena el producto obtenido por ID en la variable productoSeleccionado
        console.log("Producto obtenido por ID:", this.productoSeleccionado); // Imprime el producto obtenido por ID en la consola para verificar que se ha obtenido correctamente
      },
      error: (error) => {
        console.error("Error al obtener producto por ID:", error); // Maneja cualquier error que ocurra al obtener el producto por ID
      },
      complete: () => {
        console.log("Solicitud de producto por ID completada.");
      }
    });
  }


  guardarProducto() {
    let nuevoProducto = {
      nombre: "Nuevo Producto",
      precio: 99.99
    };

    this.productoService.createProducto(nuevoProducto).subscribe(
      response => {
        console.log("Producto creado:", response); // Imprime la respuesta de la API al crear un nuevo producto
      }
    );
  }
}
