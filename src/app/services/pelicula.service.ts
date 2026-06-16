import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula'; // Importa la clase Pelicula desde el archivo correspondiente

@Injectable({
    providedIn: 'root'
})
export class PeliculaService {

    peliculas: Pelicula[] = [];// Define un array de objetos Pelicula

    constructor() {
        this.peliculas = [
            new Pelicula("El Padrino", "Francis Ford Coppola", 1972, "Drama", "Netflix", true),
            new Pelicula("El Padrino II", "Francis Ford Coppola", 1974, "Drama", "Amazon Prime", true),
            new Pelicula("El Padrino III", "Francis Ford Coppola", 1990, "Drama", "HBO Max", true)
        ];
    }

    getPeliculas(): Pelicula[] {
        return this.peliculas; // Devuelve el array de películas
    }

    saludoService(): string {
        console.log("Hola desde el servicio de películas");
        return "Hola desde el servicio de películas";
    }
}