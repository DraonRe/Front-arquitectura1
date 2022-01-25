import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-ropa',
  templateUrl: './categoria-ropa.component.html',
  styleUrls: ['./categoria-ropa.component.css']
})
export class CategoriaRopaComponent implements OnInit {
  titulo:string="Mundo ropa";

  constructor() { }

  ngOnInit(): void {
  }

}
