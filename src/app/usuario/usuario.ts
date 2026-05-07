import { Component } from '@angular/core';
import { VentasComponent } from '../ventas/ventas';
import { ProductoComponent } from '../producto/producto.component';

@Component({
  standalone: true,
  selector: 'app-usuario',
  imports: [VentasComponent, ProductoComponent],
  templateUrl: './usuario.html',
  styleUrls: ['./usuario.css'],
})
export class Usuario {

  web = 'https://www.google.com';
  //web = null; // Para probar el error de la plantilla

  redirigir = true

  marcasPadel = ['Adidas', 'Bullpadel', 'Drop Shot', 'Head', 'Nox', 'Varlion'];
  soccerTeams = [
    {id: 1, name: 'Real Madrid'},
    {id: 2, name: 'Barcelona'},
    {id: 3, name: 'Atlético de Madrid'},
    {id: 4, name: 'Sevilla'},
    {id: 5, name: 'Valencia'}
  ];

  user = {
    name: 'John',
    surname: 'Doe',
    email: 'john.doe@example.com',
    role: 'user'
  };

  cambioRedireccion() {
    this.redirigir = !this.redirigir;
  }
}
