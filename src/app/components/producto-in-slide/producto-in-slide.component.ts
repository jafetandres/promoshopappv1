import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalVerProductoPage } from '../../pages/modal-ver-producto/modal-ver-producto.page';

@Component({
  selector: 'app-producto-in-slide',
  templateUrl: './producto-in-slide.component.html',
  styleUrls: ['./producto-in-slide.component.scss'],
})
export class ProductoInSlideComponent implements OnInit {
  @Input() producto: any;
  imagenSlide = {
    touchReleaseOnEdges: true
  };

  constructor(private router: Router,
    private modalCtrl: ModalController) {
  }

  ngOnInit() { }


  async mostrarModalVerProducto() {
    const modal = await this.modalCtrl.create({
      component: ModalVerProductoPage,
      componentProps: {
        producto: this.producto,
      }
    });
    await modal.present();
    const resp = await modal.onDidDismiss();
    console.log(resp);
  }

}
