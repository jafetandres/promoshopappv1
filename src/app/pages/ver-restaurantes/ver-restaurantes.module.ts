import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerRestaurantesPageRoutingModule } from './ver-restaurantes-routing.module';

import { VerRestaurantesPage } from './ver-restaurantes.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerRestaurantesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VerRestaurantesPage]
})
export class VerRestaurantesPageModule {}
