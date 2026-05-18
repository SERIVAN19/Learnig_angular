export class Pelicula {
    
    //definimos las propiedades de la clase Pelicula
    public id: number = 0; //inicializamos el id en 0, se incrementará automáticamente para cada nueva película
    public titulo: string;
    public director?: string; //el signo de interrogación indica que esta propiedad es opcional
    public anio?: number;
    public genero?: string;
    public plataforma?: string;
    public pago?: boolean; 

    //definimos el constructor de la clase Pelicula
    constructor(titulo: string, director?: string, anio?: number, genero?: string, plataforma?: string, pago?: boolean) {
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
        this.genero = genero;
        this.plataforma = plataforma;
        this.pago = pago;
    }
}