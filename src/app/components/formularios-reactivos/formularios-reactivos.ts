import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios-reactivos',
  imports: [ReactiveFormsModule],
  templateUrl: './formularios-reactivos.html',
  styleUrl: './formularios-reactivos.css',
})
export class FormulariosReactivos {

  // Definimos el formulario reactivo con validaciones
  formulario =  new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    edad: new FormControl('', [Validators.required, Validators.min(18)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });


  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
    } else {
      console.log('Formulario no válido');
    }
  }

}
