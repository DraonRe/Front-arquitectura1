import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo:string="Bienvenido al login - Inicia sesion"
  usuario!: Usuario;

  constructor() {
    this.usuario=new Usuario();
   }

  ngOnInit(): void {
  }


  public login():void{
    if(this.usuario.username == null || this.usuario.password==null){
      Swal.fire('Error Login', 'Username o password estan vacios','error');
    }
  }
  


}
