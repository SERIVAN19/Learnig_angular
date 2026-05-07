import { Component } from "@angular/core";
import { VentasComponent } from "../ventas/ventas";
import { Usuario } from "../usuario/usuario";


//Esto es un decorador
@Component({
  standalone: true,
  selector: "app-producto",
  imports: [Usuario, VentasComponent],
  templateUrl: "producto.component.html",
})

//Esto es una clase
export class ProductoComponent {

  //Atributos
  public nombre: string;
  public marca: string;
  public precio: number;

  //Constructor
  constructor() {
    console.log("Se ha cargado el componente producto");
      this.nombre = "Coca-cola";
      this.marca = "Coca-cola";
      this.precio = 1.5;
  }

  //Metodos
  //Este metodo se ejecuta al cargar el componente
  ngOnInit() {
    console.log("El producto es: " + this.nombre);
  }

  //Este metodo se ejecuta al cambiar el producto
  ngDoCheck() {
    console.log("El producto ha cambiado");
  }

  //Este metodo cambia el nombre del producto y se ejecuta al hacer click en el boton
  cambiarNombre() {
    this.nombre = "Pepsi";
  }

  //Este metodo se ejecuta al cargar completamente el componente
  ngAfterViewInit() {
    console.log("La vista del producto se ha cargado completamente");
  }

  //Este metodo se ejecuta al destruir el componente
  ngOnDestroy() {
    console.log("El componente producto se ha destruido");
  }
}