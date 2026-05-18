import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {

  cantidadProductos: number = 0;
  totalCarrito: number = 0;
  notificacion: string = '';
  precioBase: number = 12;
  contadorLimiteCupon: number = 0;

  // nGOnInit se ejecuta una vez que el componente ha sido inicializado
  ngOnInit() {
    this.comprobarNotificacion();
  }

  // ngDoCheck se ejecuta cada vez que Angular detecta cambios en el componente
  ngDoCheck() {
    console.log("Comprobando cambios en el carrito...");
  }

  // Método para agregar un producto al carrito
  agregarAlCarrito() {
    this.cantidadProductos++;
    this.totalCarrito += this.precioBase;
    this.comprobarNotificacion();
  }

  // Método para agregar cinco unidades al carrito
  agregarCincoUnidades() {
    this.cantidadProductos += 5;
    this.totalCarrito += this.precioBase * 5;
    this.comprobarNotificacion();
  }

  // Método para eliminar un producto del carrito
  borrarProducto() {
    if (this.cantidadProductos > 0) {
      this.cantidadProductos--;
      this.totalCarrito -= this.precioBase;
      this.comprobarNotificacion();
    }
  }

  // Método para limpiar el carrito
  limpiarCarrito() {
    this.cantidadProductos = 0;
    this.totalCarrito = 0;
    this.comprobarNotificacion();
  }

  aplicarCupon() {
    if (this.cantidadProductos > 0 && this.contadorLimiteCupon < 1) {
      this.notificacion = '¡Cupón aplicado! Has obtenido un descuento.';
      const descuento = 0.1; // 10% de descuento
      this.totalCarrito *= (1 - descuento);
      this.contadorLimiteCupon = 1;// Limitar el uso del cupón a una vez
      this.comprobarNotificacion();
    } else {
      this.notificacion = 'No puedes aplicar un cupón sin productos en el carrito.';
    }
  }

  comprobarNotificacion() {
    let precioSuperado = 100;
    if (this.totalCarrito > precioSuperado) {
      this.notificacion = '¡Haz superado los $' + precioSuperado + '!';
    } else {
      this.notificacion = '';
    }
  }
}