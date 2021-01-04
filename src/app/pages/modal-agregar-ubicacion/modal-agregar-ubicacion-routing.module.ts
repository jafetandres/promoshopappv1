import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAgregarUbicacionPage } from './modal-agregar-ubicacion.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAgregarUbicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAgregarUbicacionPageRoutingModule {}
