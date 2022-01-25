import { Factura } from "./facturas/factura";
import { Region } from "./region";

export class Cliente {
    id!: number;
    nombre!:string;
    apellido!:string;
    nivel!:string;
    documento!:string;
    direccion!:string;
    email!:string;
    telefono!:string;
    id_Refereido!:number;
    createAt!:string;
    foto!:string;
    region!:Region;

    facturas: Factura[]=[];
}
