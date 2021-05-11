import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalMetodosPagoGuardadosPageRoutingModule } from './modal-metodos-pago-guardados-routing.module';

import { ModalMetodosPagoGuardadosPage } from './modal-metodos-pago-guardados.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalMetodosPagoGuardadosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalMetodosPagoGuardadosPage]
})
export class ModalMetodosPagoGuardadosPageModule {}
