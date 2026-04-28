import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {

  web = 'https://www.google.com';
  //web = null; // Para probar el error de la plantilla

  redirigir = false
}
