import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss'],
})
export class ModalHeaderComponent implements OnInit {
  @Input() titulo:string;
  @Input() icon_name:string='arrow-back-outline';
  @Input() portada:string='';
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.icon_name);
  }

  salirConArgumentos() {
    this.modalCtrl.dismiss();
  }

  

}
