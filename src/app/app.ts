import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { ProductoComponent } from './producto/producto.component';
//import { Usuario } from './usuario/usuario';
//import { VentasComponent } from './components/ventas/ventas';
import { config } from './models/config';
import { Cine } from './components/cine/cine';
import { Carrito } from './components/carrito/carrito';
import { Carritosenales } from './components/carritosenales/carritosenales';
import { Padre } from './components/padre/padre';
import { UsuariosHTTP } from './components/usuarios-http/usuarios-http';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal(config.title);
}
