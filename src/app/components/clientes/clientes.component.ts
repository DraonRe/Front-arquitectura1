import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  titulo:string = 'Listado de Vendedores';
  clientes!: Cliente[];
 
  
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {

    this.clienteService.getClientes().subscribe(
      clientes => this.clientes=clientes
    );
    
  }

  eliminar(cliente:Cliente):void{
    
    Swal.fire({
      title: '¿Esta seguro?',
      text: `Esta seguro de eliminar a ${cliente.nombre} ${cliente.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.clienteService.eliminar(cliente.id).subscribe( () =>{
          this.clientes = this.clientes.filter(c => c !== cliente);
          Swal.fire('Eliminado', 
          `Cliente ${cliente.nombre} eliminado con exito`,
          'success')
        } );
      }
    });
  }



}
