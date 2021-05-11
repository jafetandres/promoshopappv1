import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalVerRestaurantePage } from '../../pages/modal-ver-restaurante/modal-ver-restaurante.page';

@Component({
  selector: 'app-empresa-horizontal',
  templateUrl: './empresa-horizontal.component.html',
  styleUrls: ['./empresa-horizontal.component.scss'],
})
export class EmpresaHorizontalComponent implements OnInit {
  @Input() empresa:any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

 
  async mostrarModalVerRestaurante() {
    const modal = await this.modalCtrl.create({
      component: ModalVerRestaurantePage,
      componentProps: {
        restaurante: this.empresa,
      }
    });
    await modal.present();
    // const resp = await modal.onDidDismiss();
    // console.log(resp);
  }

}
