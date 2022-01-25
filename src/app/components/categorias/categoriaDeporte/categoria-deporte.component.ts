import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-deporte',
  templateUrl: './categoria-deporte.component.html',
  styleUrls: ['./categoria-deporte.component.css']
})
export class CategoriaDeporteComponent implements OnInit {

  titulo:string="Mundo Deporte";

  constructor() { }

  ngOnInit(): void {
  }

}
