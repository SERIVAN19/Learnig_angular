import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  standalone: true,
  imports: [ProductoComponent, NgClass, NgStyle],  //Directivas
  selector: 'app-ventas',
  templateUrl: './ventas.html',
  styleUrls: ['./ventas.css'],
})
export class VentasComponent {

  public colorear:boolean = false;

  public mostar:string = "Si";
}
