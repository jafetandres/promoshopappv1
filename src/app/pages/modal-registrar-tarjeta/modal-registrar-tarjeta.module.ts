import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRegistrarTarjetaPageRoutingModule } from './modal-registrar-tarjeta-routing.module';

import { ModalRegistrarTarjetaPage } from './modal-registrar-tarjeta.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRegistrarTarjetaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalRegistrarTarjetaPage]
})
export class ModalRegistrarTarjetaPageModule {}
