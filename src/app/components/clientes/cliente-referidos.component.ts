import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-referidos',
  templateUrl: './cliente-referidos.component.html',
  styleUrls: ['./cliente-referidos.component.css']
})
export class ClienteReferidosComponent implements OnInit {

  titulo:string = 'Listado de Referidos';
  lista!:Cliente[];
  error:any;
  id:number = 1;
  constructor(private service: ClienteService, private router: Router) { }
  
  ngOnInit(): void {
    this.service.verReferidos(this.id).subscribe(list => this.lista = list);
  }


}
