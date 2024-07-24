import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent {
 
  listTarjetas: any[] = [
    {titular: 'juan perez', numeroTarjeta: '12589456325', fechaExpiracion: '11/24', cvv:'123'},
    {titular: 'anthony rodriguez',    numeroTarjeta:  '12589457896', fechaExpiracion: '08/24', cvv:'1225'},
    

  ];

}
