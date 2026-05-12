import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { ProductoComponent } from './producto/producto.component';
import { Usuario } from './usuario/usuario';
import { VentasComponent } from './ventas/ventas';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [VentasComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('learning_angular_with_udemy');
}
