import { Component } from '@angular/core';
import { Hijo } from '../hijo/hijo';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {

  nombreDelPadre: string = 'Sergio';
  saludoRecibido: string = '';
  recibirSaludoDelHijo(saludo: string) {
    this.saludoRecibido = saludo;
  }

}
