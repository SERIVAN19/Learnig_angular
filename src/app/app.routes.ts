import { Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { Cine } from './components/cine/cine';
import { Usuario } from './components/usuario/usuario';
import { VentasComponent } from './components/ventas/ventas';
import { Carrito } from './components/carrito/carrito';
import { Carritosenales } from './components/carritosenales/carritosenales';
import { Padre } from './components/padre/padre';
import { UsuariosHTTP } from './components/usuarios-http/usuarios-http';
import { Pagina404 } from './components/pagina404/pagina404';
import { Formularios } from './components/formularios/formularios';
import { FormulariosReactivos } from './components/formularios-reactivos/formularios-reactivos';

export const routes: Routes = [
    {path: "", component: ProductoComponent},
    {path: "inicio", component: ProductoComponent},
    {path: "componentes", component: ProductoComponent},
    {path: "plantillas", component: Usuario},
    {path: "directivas", component: VentasComponent},
    {path: "modelos", component: Cine},
    {path: "carrito", component: Carrito},
    {path: "signals", component: Carritosenales},
    {path: "comunicacion", component: Padre},
    {path: "servicios", component: UsuariosHTTP},
    {path: "servicios/:id", component: UsuariosHTTP},
    {path: "formularios", component: Formularios},
    {path: "formularios-reactivos", component: FormulariosReactivos},
    {path: "**", component: Pagina404}// Ruta para manejar cualquier ruta no definida y mostrar la página 404
];
