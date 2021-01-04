import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartMarketplaceService {
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getCart() {
    return this.cart;
  }
  getCartItemCount() {
    return this.cartItemCount;
  }

  addProducto(producto: Producto) {
    let added = false;
    var cantidad: number = +producto.cantidad;
    for (let p of this.cart) {
      if (p.id === producto.id) {
        cantidad +=  1;
        console.log(cantidad);
        p.cantidad = cantidad;
        added = true;
        break;
      }
    }
    if (!added) {
      // producto.cantidad = 1;
      console.log("entro2" + producto.cantidad);
      this.cart.push(producto);
    }

    this.cartItemCount.next(this.cartItemCount.value + cantidad);
  }

  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.cantidad -= 1;
        if (p.cantidad === 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.cantidad);
        this.cart.splice(index, 1);
      }
    }
  }
}
