import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../../interfaces/interfaces';

@Component({
  selector: 'app-modal-registrar-tarjeta',
  templateUrl: './modal-registrar-tarjeta.page.html',
  styleUrls: ['./modal-registrar-tarjeta.page.scss'],
})
export class ModalRegistrarTarjetaPage implements OnInit {
tarjeta:Tarjeta={
  etiqueta:'**123',
  marca:'Visa',
}
  constructor() { }

  ngOnInit() {
  }
  registrarTarjeta(){

  }
}
