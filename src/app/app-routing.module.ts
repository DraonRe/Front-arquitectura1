import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaAnimeComponent } from './components/categorias/categoriaAnime/categoria-anime.component';
import { CategoriaDeporteComponent } from './components/categorias/categoriaDeporte/categoria-deporte.component';
import { CategoriaRopaComponent } from './components/categorias/categoriaRopa/categoria-ropa.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CategoriaSaludComponent } from './components/categorias/categoriaSalud/categoria-salud.component';
import { CategoriaTecnologiaComponent } from './components/categorias/categoriaTecnologia/categoria-tecnologia.component';
import { CategoriaAccesComponent } from './components/categorias/categoriaAcces/categoria-acces.component';
import { ClienteFormComponent } from './components/clientes/cliente-form.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DetalleComponent } from './components/clientes/detalle/detalle/detalle.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoFormComponent } from './components/productos/producto-form.component';

import { ProductosComponent } from './components/productos/productos.component';
import { LoginComponent } from './components/usuarios/login.component';
import { DetalleFacturaComponent } from './components/facturas/detalle-factura.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { ClienteReferidosComponent } from './components/clientes/cliente-referidos.component';



const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'clientes', component:ClientesComponent},
  {path:'clientes/form', component:ClienteFormComponent},
  {path:'clientes/form/:id', component:ClienteFormComponent},
  {path:'productos', component:ProductosComponent},
  {path:'productos/form', component:ProductoFormComponent},
  {path:'productos/form/:id', component:ProductoFormComponent},
  {path:'login',component:LoginComponent},
  {path:'categorias',component:CategoriasComponent}, 
  {path:'categorias/categoriaDeporte',component:CategoriaDeporteComponent},
  {path:'categorias/categoriaSalud',component:CategoriaSaludComponent},
  {path:'categorias/categoriaTecnologia',component:CategoriaTecnologiaComponent},
  {path:'categorias/categoriaRopa',component:CategoriaRopaComponent},
  {path:'categorias/categoriaAnime',component:CategoriaAnimeComponent},
  {path:'categorias/categoriaAccesorios',component:CategoriaAccesComponent},
  {path:'clientes/detalle/:id', component:DetalleComponent},
  {path: 'facturas/:id',component:DetalleFacturaComponent},
  {path: 'facturas/form/:clienteId',component:FacturasComponent},
  {path: 'clientes/referidos/:id',component:ClienteReferidosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
