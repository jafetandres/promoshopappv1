import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAgregarUbicacionPageRoutingModule } from './modal-agregar-ubicacion-routing.module';

import { ModalAgregarUbicacionPage } from './modal-agregar-ubicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAgregarUbicacionPageRoutingModule
  ],
  declarations: [ModalAgregarUbicacionPage]
})
export class ModalAgregarUbicacionPageModule {}
