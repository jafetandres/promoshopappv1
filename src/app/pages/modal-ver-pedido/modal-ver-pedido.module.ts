import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVerPedidoPageRoutingModule } from './modal-ver-pedido-routing.module';

import { ModalVerPedidoPage } from './modal-ver-pedido.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVerPedidoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalVerPedidoPage]
})
export class ModalVerPedidoPageModule {}
