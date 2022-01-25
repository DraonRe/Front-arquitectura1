import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-salud',
  templateUrl: './categoria-salud.component.html',
  styleUrls: ['./categoria-salud.component.css']
})
export class CategoriaSaludComponent implements OnInit {
  titulo:string="Mundo salud";

  constructor() { }

  ngOnInit(): void {
  }

}
