import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { ProductoComponent } from './producto/producto.component';
//import { Usuario } from './usuario/usuario';
//import { VentasComponent } from './components/ventas/ventas';
import { config } from './models/config';
import { Cine } from './components/cine/cine';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [Cine],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal(config.title);
}
