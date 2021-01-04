import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/interfaces';
import { CartMarketplaceService } from '../../services/cart-marketplace.service';
import { UsuarioService } from '../../services/usuario.service';
import { ModalUbicacionesGuardadasPage } from '../modal-ubicaciones-guardadas/modal-ubicaciones-guardadas.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart-marketplace',
  templateUrl: './cart-marketplace.page.html',
  styleUrls: ['./cart-marketplace.page.scss'],
})
export class CartMarketplacePage implements OnInit {
  cart: Producto[] = [];
  ubicaciones: any = [];
  ubicacionEntregaDefault:any;


  constructor(private cartMarketplaceService: CartMarketplaceService,
    private usuarioService: UsuarioService,
    private modalCtrl: ModalController) {
    this.usuarioService.getUbicaciones().then(resp => {
      resp.subscribe(res => {
        this.ubicaciones = res;
        console.log(JSON.stringify(this.ubicaciones));
      })
    });
  }

  ngOnInit() {
    this.cart = this.cartMarketplaceService.getCart();
    
  }
  async abrirUbicacionesGuardadas() {
    console.log("ubicaciones3" + JSON.stringify(this.ubicaciones));
    const modal = await this.modalCtrl.create({
      component: ModalUbicacionesGuardadasPage,
      componentProps: {
        ubicaciones: this.ubicaciones,
      }
    });
    await modal.present();
    const resp = await modal.onDidDismiss();
    console.log(resp);
  }

  decreaseCartItem(product) {
    this.cartMarketplaceService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartMarketplaceService.addProducto(product);
  }

  removeCartItem(product) {
    this.cartMarketplaceService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.precio * j.cantidad, 0);
  }


  // async checkout() {
  //   // Perfom PayPal or Stripe checkout process

  //   let alert = await this.alertCtrl.create({
  //     header: 'Thanks for your Order!',
  //     message: 'We will deliver your food as soon as possible',
  //     buttons: ['OK']
  //   });
  //   alert.present().then(() => {
  //     this.modalCtrl.dismiss();
  //   });
  // }



}
