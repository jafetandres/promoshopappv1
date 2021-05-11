import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVerRestaurantePageRoutingModule } from './modal-ver-restaurante-routing.module';

import { ModalVerRestaurantePage } from './modal-ver-restaurante.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVerRestaurantePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalVerRestaurantePage]
})
export class ModalVerRestaurantePageModule {}
