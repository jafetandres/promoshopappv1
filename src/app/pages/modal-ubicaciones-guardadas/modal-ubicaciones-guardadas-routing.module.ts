import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalUbicacionesGuardadasPage } from './modal-ubicaciones-guardadas.page';

const routes: Routes = [
  {
    path: '',
    component: ModalUbicacionesGuardadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalUbicacionesGuardadasPageRoutingModule {}
