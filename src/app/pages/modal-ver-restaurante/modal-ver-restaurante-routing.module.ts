import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVerRestaurantePage } from './modal-ver-restaurante.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVerRestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVerRestaurantePageRoutingModule {}
