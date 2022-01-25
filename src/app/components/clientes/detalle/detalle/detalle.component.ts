import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';
import { Factura } from 'src/app/models/facturas/factura';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'detalle-cliente',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  cliente!: Cliente;
  titulo:string="Detalle del vendedor";
  id!:number;
  error:any;
  imagenSeleccionada!: File;

  factura!:Factura;
  

  constructor( private clienteService :ClienteService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private facturaService:FacturaService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.clienteService.getCliente(id).subscribe(
      data => {this.cliente = data;
      },
      err =>{
      if(err.status === 400) {
        this.error = err.error;
      }
      this.router.navigate(['/clientes']);

    });
  }

  seleccionarImagen(event:any): void {
    this.imagenSeleccionada = event.target.files[0];
    console.info(this.imagenSeleccionada);
    if(this.imagenSeleccionada.type.indexOf('image') < 0){
      Swal.fire('Error Seleccionar imagen' ,'El archivo debe ser de tipo imagen','error');
      //this.imagenSeleccionada =  null;
    }
  }

  subirFoto(){

    if(!this.imagenSeleccionada){
      Swal.fire('Error Upload:' ,'Debe seleccionar una imagen','error');
    }


    this.clienteService.subirFoto(this.imagenSeleccionada , this.cliente.id)
    .subscribe(cliente=>{
      this.cliente = cliente;
      Swal.fire('la foto se ha subido completamente', `La foto se ha subdo con exito: ${this.cliente.foto}`,'success')
    });
  }


  eliminar(factura:Factura):void{

    Swal.fire({
      title: '¿Esta seguro?',
      text: `Esta seguro de eliminar la factura ${factura.descripcion}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.facturaService.eliminar(factura.id).subscribe( () =>{
          this.cliente.facturas = this.cliente.facturas.filter(f => f !== factura);
          Swal.fire('Factura Eliminada', 
          `Factura ${factura.descripcion} eliminada con exito`,
          'success')
        } );
      }
    });

  }

}
