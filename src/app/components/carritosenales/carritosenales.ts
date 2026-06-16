import { Component } from '@angular/core';
import { signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-carritosenales',
  imports: [],
  templateUrl: './carritosenales.html',
  styleUrl: './carritosenales.css',
})
export class Carritosenales {

  //Señales para el carrito de compras
  nombreTienda = signal('Mi Tienda');
  cantidadProductos = signal(1)
  totalCarrito = signal(0);
  notificacion = signal('');

  precioBase: number = 12;
  contadorLimiteCupon: number = 0;

  // Simulación de actualización del carrito
  constructor() {
    effect(() => { // Efecto para actualizar el total del carrito cada vez que cambie la cantidad de productos
      this.comprobarNotificacion();
    });
  }

  // Método para agregar un producto al carrito
   agregarAlCarrito() {
    this.cantidadProductos.update((value) => value + 1);
    this.totalCarrito.update((value) => value + this.precioBase);
  }

  // Método para agregar cinco unidades al carrito
  agregarCincoUnidades(){
    this.cantidadProductos.update((value) => value + 5);
    this.totalCarrito.update((value) => value + (this.precioBase * 5));
  }

   // Método para eliminar un producto del carrito
  borrarProducto() {
    if (this.cantidadProductos() > 0) {
      this.cantidadProductos.update((value) => value - 1);
      this.totalCarrito.update((value) => value - this.precioBase);
      this.comprobarNotificacion();
    }
  }

  // Método para limpiar el carrito
  limpiarCarrito() {
    this.cantidadProductos.set(0);
    this.totalCarrito.set(0);
    this.comprobarNotificacion();
  }

  aplicarCupon() {
    if (this.cantidadProductos() > 0 && this.contadorLimiteCupon < 1) {
      this.notificacion.set('¡Cupón aplicado! Has obtenido un descuento.');
      const descuento = 0.1; // 10% de descuento
      this.totalCarrito.update((value) => value * (1 - descuento));
      this.contadorLimiteCupon = 1;// Limitar el uso del cupón a una vez
      this.comprobarNotificacion();
    } else {
      this.notificacion.set('No puedes aplicar un cupón sin productos en el carrito.');
    }
  }

  // Método para actualizar el total del carrito
  comprobarNotificacion() {
    let precioSuperado = 100;
    if (this.totalCarrito() > precioSuperado) {
      this.notificacion.set('¡Haz superado los $' + precioSuperado + '!');
    } else {
      this.notificacion.set('');
    }
  }

  /*
  contador = signal(0);
  incremento = signal(1);
  contadorX3 = computed(() => this.contador() * 3);
  */
}
