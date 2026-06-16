import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {

  nombreDelHijo: string = 'Sergio Jr.';

  // El decorador @Input() se utiliza para marcar una propiedad como una propiedad 
  // de entrada, lo que significa que puede recibir datos desde un componente padre.
  @Input() nombreDelPadre: string = '';

  // El decorador @Output() se utiliza para marcar una propiedad como una propiedad
  @Output() saludoDelHijo: EventEmitter<string> = new EventEmitter<string>();

  // El método enviarSaludoAlPadre() se llama cuando el usuario hace clic en el botón "Enviar saludo al padre".
  enviarSaludoAlPadre(){
    this.saludoDelHijo.emit(`Hola ${this.nombreDelPadre}, soy tu hijo ${this.nombreDelHijo}`);
  }

}
