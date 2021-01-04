import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-ubicaciones-guardadas',
  templateUrl: './modal-ubicaciones-guardadas.page.html',
  styleUrls: ['./modal-ubicaciones-guardadas.page.scss'],
})
export class ModalUbicacionesGuardadasPage implements OnInit {
  @Input() ubicaciones: any;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }
  salirConArgumentos() {
    this.modalCtrl.dismiss({
      nombres: 'Felipe',
      pais: 'España'
    });
  }

}
