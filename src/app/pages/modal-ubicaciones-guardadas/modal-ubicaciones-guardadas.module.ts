import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalUbicacionesGuardadasPageRoutingModule } from './modal-ubicaciones-guardadas-routing.module';

import { ModalUbicacionesGuardadasPage } from './modal-ubicaciones-guardadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalUbicacionesGuardadasPageRoutingModule
  ],
  declarations: [ModalUbicacionesGuardadasPage]
})
export class ModalUbicacionesGuardadasPageModule {}
