import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  titulo:string="hola cate";
  tituloDepo:string="hola cate depo";

  constructor() { }

  ngOnInit(): void {
  }

}
