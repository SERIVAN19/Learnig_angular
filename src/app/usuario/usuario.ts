import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe,SlicePipe, DatePipe } from '@angular/common';
import { VentasComponent } from '../ventas/ventas';
import { ProductoComponent } from '../producto/producto.component';
import { CambiaLetrasPipe } from '../pipes/cambiaLetras.pipes';

@Component({
  standalone: true,
  selector: 'app-usuario',
  imports: [VentasComponent, ProductoComponent, UpperCasePipe, LowerCasePipe, SlicePipe, DatePipe, CambiaLetrasPipe],
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

  fecha = new Date(2023, 5, 15); // 15 de junio de 2023 (mes es 0-indexado)

  cambioRedireccion() {
    this.redirigir = !this.redirigir;
  }
}
