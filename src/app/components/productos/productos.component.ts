import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  titulo:string='Listado de Productos';
  lista!:Producto[];
  
  constructor(private service: ProductoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(list => this.lista = list);
  }

  eliminar(producto:Producto):void{
    
    Swal.fire({
      title: 'Esta Seguro?',
      text: `Esta seguro de eliminar a ${producto.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.service.eliminar(producto.id).subscribe( () =>{
          this.lista = this.lista.filter(p => p !== producto);
          Swal.fire('Eliminado', `Producto ${producto.nombre} eliminado con exito`,'success')
        } );
      }
    });
  }

}



