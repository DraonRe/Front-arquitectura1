import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-anime',
  templateUrl: './categoria-anime.component.html',
  styleUrls: ['./categoria-anime.component.css']
})
export class CategoriaAnimeComponent implements OnInit {

  titulo:string="Mundo anime";

  constructor() { }

  ngOnInit(): void {
  }
 
}
