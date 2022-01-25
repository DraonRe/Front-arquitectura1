import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/services/factura.service';
import { Factura } from 'src/app/models/facturas/factura';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html',
  styleUrls: ['./detalle-factura.component.css']
})
export class DetalleFacturaComponent implements OnInit {

  titulo:string="Detalles Factura"
  factura!:Factura;
  id!:number;
  error:any;

  constructor(private facturaService: FacturaService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.facturaService.getFactura(id).subscribe(
      data => {this.factura = data;
      });


  }

}
