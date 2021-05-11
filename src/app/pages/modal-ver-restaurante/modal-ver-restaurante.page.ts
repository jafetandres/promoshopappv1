import { Component, Input, OnInit } from '@angular/core';
import { RestauranteService } from '../../services/restaurante.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-ver-restaurante',
  templateUrl: './modal-ver-restaurante.page.html',
  styleUrls: ['./modal-ver-restaurante.page.scss'],
})
export class ModalVerRestaurantePage implements OnInit {
  @Input() restaurante: any;

  constructor(private restauranteService: RestauranteService,
    private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  salirConArgumentos() {
    this.modalCtrl.dismiss({
      nombres: 'Felipe',
      pais: 'España'
    });
  }
}
