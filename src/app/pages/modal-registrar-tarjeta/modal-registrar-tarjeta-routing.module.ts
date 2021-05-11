import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalRegistrarTarjetaPage } from './modal-registrar-tarjeta.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRegistrarTarjetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRegistrarTarjetaPageRoutingModule {}
