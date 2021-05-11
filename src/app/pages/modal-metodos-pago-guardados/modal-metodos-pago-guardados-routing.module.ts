import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalMetodosPagoGuardadosPage } from './modal-metodos-pago-guardados.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMetodosPagoGuardadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalMetodosPagoGuardadosPageRoutingModule {}
