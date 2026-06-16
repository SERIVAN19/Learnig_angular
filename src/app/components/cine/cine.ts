import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula';// Importa la clase Pelicula desde el archivo correspondiente
import { FormsModule } from '@angular/forms'; // Importa FormsModule para usar ngModel
import { PeliculaService } from '../../services/pelicula.service'; // Importa el servicio de películas para usarlo en el componente

@Component({
  selector: 'app-cine',
  imports: [FormsModule], // Asegúrate de importar FormsModule para usar ngModel
  templateUrl: './cine.html',
  styleUrl: './cine.css',
})
export class Cine {

  public peliculas: Pelicula[] = []; // Define una propiedad para almacenar la lista de películas
  public MiPelicula: String = ""; // Define una propiedad para almacenar el título de la película ingresada por el usuario
  public peliculaSinDatos: String[] = [];

  //Constructor para inicializar el array de películas con algunos datos de ejemplo
  constructor(private peliculaService: PeliculaService) {// Inyecta el servicio de películas en el constructor
    this.peliculas = this.peliculaService.getPeliculas(); // Obtiene la lista de películas del servicio y la asigna a la propiedad peliculas
  }

  //Metodo para mostrar una alerta con el título de la película ingresada por el usuario
  showPelicula() {
    alert(`La película "${this.MiPelicula}" ha sido agregada a la lista.`);
  }

  //Metodo para agregar la película ingresada por el usuario a la lista de películas sin datos
  sumarPelicula() {
    this.peliculaSinDatos.push(this.MiPelicula); // Agrega el título de la película ingresada a la lista de películas sin datos
    this.MiPelicula = ""; // Limpia el campo de entrada después de agregar la película
  }

  //Metodo para borrar una película de la lista de películas
  borrarPelicula(pelicula: Pelicula) {
    const index = this.peliculas.indexOf(pelicula); // Encuentra el índice de la película a borrar
    if (index > -1) {
      this.peliculas.splice(index, 1); // Elimina la película del array si se encuentra
    }
  }

  //Metodo para mostrar una alerta cuando el campo de entrada recibe el foco
  haciendoFoco() {
    alert("¡Estás haciendo foco en el campo de entrada!");
  }

  //Metodo para mostrar una alerta cuando el campo de entrada pierde el foco
  saliendoFoco() {
    alert("¡Has salido del campo de entrada!");
  }

  //Metodo para mostrar una alerta cada vez que se pulsa una tecla en el campo de entrada
  pulsandoTeclas() {
    console.log("¡Estás pulsando una tecla en el campo de entrada!");
  }


  ngOnInit() {
    this.peliculaService.saludoService(); // Llama al método saludoService del servicio de películas cuando el componente se inicializa
  }
}
