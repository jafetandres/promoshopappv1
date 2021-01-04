import { Component,ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartMarketplaceService } from '../../services/cart-marketplace.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  cartItemCount: BehaviorSubject<number>;
  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  constructor(private cartMarketplaceService: CartMarketplaceService) {
    this.cartItemCount = this.cartMarketplaceService.getCartItemCount();
  }

}
