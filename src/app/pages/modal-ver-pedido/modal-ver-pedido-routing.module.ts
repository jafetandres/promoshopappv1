import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVerPedidoPage } from './modal-ver-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVerPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVerPedidoPageRoutingModule {}
