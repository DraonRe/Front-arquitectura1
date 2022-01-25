import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  titulo:string ='Formulario Verdedor';
  
  cliente: Cliente = new Cliente();

  error:any;

  constructor(private service: ClienteService, 
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.editar()
    
  }

  editar():void{
    this.route.params.subscribe(params =>{
      let id = params['id'];
      if(id){
        this.service.getCliente(id).subscribe((cliente) => this.cliente=cliente);
      }
    });
  }

  public crear():void{
    this.service.crear(this.cliente).subscribe(cliente =>{
      Swal.fire('Nuevo', `Vendedor ${cliente.nombre} creado con exito`,'success')
      this.router.navigate(['/clientes']);
    }, err =>{
      if(err.status === 400){
        this.error = err.error;
      }
    });
  }

  modificar():void{
    this.service.modificar(this.cliente).subscribe(cliente => {
      Swal.fire('Modificado', `Vendedor ${cliente.nombre} modificado con exito`,'success')
      this.router.navigate(['/clientes'])
    })
  }

 
  

}
