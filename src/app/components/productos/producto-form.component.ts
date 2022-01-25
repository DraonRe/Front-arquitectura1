import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  titulo: string = 'Formulario Producto';
  producto: Producto = new Producto;
  error: any;
  private imagenSeleccionada!: File;

  constructor(private service: ProductoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.editar();
  }

  crear() {
    if (!this.imagenSeleccionada) {
      this.service.crear(this.producto).subscribe(producto => {
        Swal.fire('Nuevo', `Producto ${producto.nombre} creado con exito`, 'success')
        this.router.navigate(['/productos']);
      }, err => {
        if (err.status === 400) {
          this.error = err.error;
          ;
        }
      });
    } else {
      this.service.crearConImagen(this.producto, this.imagenSeleccionada).subscribe(producto => {
        Swal.fire('Nuevo', `Producto ${producto.nombre} creado con exito`, 'success')
        this.router.navigate(['/productos']);
      }, err => {
        if (err.status === 400) {
          this.error = err.error;
          ;
        }
      });
    }
  }

  editar(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.service.ver(id).subscribe((product) => this.producto = product);
      }
    });
  }

  modificar() {
    if (!this.imagenSeleccionada) {
      this.service.modificar(this.producto).subscribe(producto => {
        Swal.fire('Modificado', `Producto ${producto.nombre} modificado con exito`, 'success')
        this.router.navigate(['/productos']);
      }, err => {
        if (err.status === 400) {
          this.error = err.error;
          ;
        }
      });
    } else {
      this.service.modificarConImagen(this.producto,this.imagenSeleccionada).subscribe(producto => {
        Swal.fire('Modificado', `Producto ${producto.nombre} modificado con exito`, 'success')
        this.router.navigate(['/productos']);
      }, err => {
        if (err.status === 400) {
          this.error = err.error;
          ;
        }
      });
    }
  }

  seleccionarImagen(event:any): void {
    this.imagenSeleccionada = event.target.files[0];
    console.info(this.imagenSeleccionada);
  }
}

