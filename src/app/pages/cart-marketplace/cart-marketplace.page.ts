import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/interfaces';
import { CartMarketplaceService } from '../../services/cart-marketplace.service';
import { UsuarioService } from '../../services/usuario.service';
import { ModalUbicacionesGuardadasPage } from '../modal-ubicaciones-guardadas/modal-ubicaciones-guardadas.page';
import { ModalController } from '@ionic/angular';
import { ModalMetodosPagoGuardadosPage } from '../modal-metodos-pago-guardados/modal-metodos-pago-guardados.page';

@Component({
  selector: 'app-cart-marketplace',
  templateUrl: './cart-marketplace.page.html',
  styleUrls: ['./cart-marketplace.page.scss'],
})
export class CartMarketplacePage implements OnInit {
  cart: Producto[] = [];
  ubicaciones: any = [];
  tarjetas: any = [];


  constructor(private cartMarketplaceService: CartMarketplaceService,
    private usuarioService: UsuarioService,
    private modalCtrl: ModalController) {
    this.getUbicacionesUsuario();
    this.getTarjetasUsuario();
  }

  ngOnInit() {
    this.cart = this.cartMarketplaceService.getCart();
  }

  getUbicacionesUsuario() {
    this.usuarioService.getUbicacionesUsuario().then(resolve => {
      resolve.subscribe(resp => {
        this.ubicaciones = resp;
      })
    });
  }

  getTarjetasUsuario() {
    this.usuarioService.getTarjetasUsuario().then(resolve => {
      resolve.subscribe(resp => {
        this.tarjetas = resp;
      })
    });
  }

  async abrirUbicacionesGuardadas() {
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

  async abrirMetodosPagoGuardados() {
    const modal = await this.modalCtrl.create({
      component: ModalMetodosPagoGuardadosPage,
      componentProps: {
        tarjetas: this.tarjetas,
      }
    });
    await modal.present();
    const resp = await modal.onDidDismiss();
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
