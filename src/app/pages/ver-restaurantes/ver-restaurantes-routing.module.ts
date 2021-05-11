import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerRestaurantesPage } from './ver-restaurantes.page';

const routes: Routes = [
  {
    path: '',
    component: VerRestaurantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerRestaurantesPageRoutingModule {}
