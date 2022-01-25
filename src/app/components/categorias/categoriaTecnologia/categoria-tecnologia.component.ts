import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-tecnologia',
  templateUrl: './categoria-tecnologia.component.html',
  styleUrls: ['./categoria-tecnologia.component.css']
})
export class CategoriaTecnologiaComponent implements OnInit {

  titulo:string="Mundo tecnologia";

  constructor() { }

  ngOnInit(): void {
  }

}
