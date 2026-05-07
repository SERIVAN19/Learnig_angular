import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { ProductoComponent } from './producto/producto.component';
import { Usuario } from './usuario/usuario';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [Usuario],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('learning_angular_with_udemy');
}
