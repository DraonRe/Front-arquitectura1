import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { ClienteFormComponent } from './components/clientes/cliente-form.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/usuarios/login.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CategoriaDeporteComponent } from './components/categorias/categoriaDeporte/categoria-deporte.component';
import { CategoriaSaludComponent } from './components/categorias/categoriaSalud/categoria-salud.component';
import { CategoriaTecnologiaComponent } from './components/categorias/categoriaTecnologia/categoria-tecnologia.component';
import { CategoriaRopaComponent } from './components/categorias/categoriaRopa/categoria-ropa.component';
import { CategoriaAnimeComponent } from './components/categorias/categoriaAnime/categoria-anime.component';
import { ProductoFormComponent } from './components/productos/producto-form.component';
import { DetalleComponent } from './components/clientes/detalle/detalle/detalle.component';
import { CategoriaAccesComponent } from './components/categorias/categoriaAcces/categoria-acces.component';
import { DetalleFacturaComponent } from './components/facturas/detalle-factura.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ClienteReferidosComponent } from './components/clientes/cliente-referidos.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ProductosComponent,
    HomeComponent,
    ClienteFormComponent,
    ProductoFormComponent,
    LoginComponent,
    CategoriasComponent,
    CategoriaDeporteComponent,
    CategoriaSaludComponent,
    CategoriaTecnologiaComponent,
    CategoriaRopaComponent,
    CategoriaAnimeComponent,
    DetalleComponent,
    CategoriaAccesComponent,
    DetalleFacturaComponent,
    FacturasComponent,
    ClienteReferidosComponent
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
