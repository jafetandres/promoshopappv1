import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartMarketplacePageRoutingModule } from './cart-marketplace-routing.module';

import { CartMarketplacePage } from './cart-marketplace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartMarketplacePageRoutingModule
  ],
  declarations: [CartMarketplacePage]
})
export class CartMarketplacePageModule {}
