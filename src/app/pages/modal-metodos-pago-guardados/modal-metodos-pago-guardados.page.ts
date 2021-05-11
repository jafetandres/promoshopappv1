import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalRegistrarTarjetaPage } from '../modal-registrar-tarjeta/modal-registrar-tarjeta.page';


@Component({
  selector: 'app-modal-metodos-pago-guardados',
  templateUrl: './modal-metodos-pago-guardados.page.html',
  styleUrls: ['./modal-metodos-pago-guardados.page.scss'],
})
export class ModalMetodosPagoGuardadosPage implements OnInit {
  @Input() tarjetas: any;
  seleccionado: boolean = false;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  seleccionarMetodoPago() {
    this.seleccionado = !this.seleccionado;
  }
  async addTarjetaUsuario() {
    const modal = await this.modalCtrl.create({
      component: ModalRegistrarTarjetaPage
    });
    await modal.present();
    const resp = await modal.onDidDismiss();

  }

}
