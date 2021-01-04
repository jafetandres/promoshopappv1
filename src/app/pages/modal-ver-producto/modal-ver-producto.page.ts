import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartMarketplaceService } from '../../services/cart-marketplace.service';
import { Producto } from '../../interfaces/interfaces';

@Component({
  selector: 'app-modal-ver-producto',
  templateUrl: './modal-ver-producto.page.html',
  styleUrls: ['./modal-ver-producto.page.scss'],
})
export class ModalVerProductoPage implements OnInit {
  public didInit: boolean = false;
  numbers;
  cantidad: number = 1;

  @Input() producto: Producto;
  imagenSlide = {
    touchReleaseOnEdges: true
  };

  constructor(private modalCtrl: ModalController,
    private cartService: CartMarketplaceService) {
  }

  ngOnInit() {
    this.numbers = Array(this.producto.cantidad_max).fill(0).map((x, i) => i + 1);
  }

  

  cambiarCantidad(event) {
    this.cantidad = event.detail.value;

  }

  addToCart(producto) {
    producto.cantidad = this.cantidad
    this.cartService.addProducto(producto);
    this.salirConArgumentos();
    // this.animateCSS('tada');
  }

  // async openCart() {
  //   this.animateCSS('bounceOutLeft', true);
  //   let modal = await this.modalCtrl.create({
  //     component: ModalCartMarketplacePage,
  //     cssClass: 'cart-modal'
  //   });
  //   modal.onWillDismiss().then(() => {
  //     this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
  //     this.animateCSS('bounceInLeft');
  //   });
  //   modal.present();
  // }

  // animateCSS(animationName, keepAnimated = false) {
  //   const node = this.fab.nativeElement;
  //   node.classList.add('animated', animationName)

  //   //https://github.com/daneden/animate.css
  //   function handleAnimationEnd() {
  //     if (!keepAnimated) {
  //       node.classList.remove('animated', animationName);
  //     }
  //     node.removeEventListener('animationend', handleAnimationEnd)
  //   }
  //   node.addEventListener('animationend', handleAnimationEnd)
  // }

  salirConArgumentos() {
    this.modalCtrl.dismiss({
      nombres: 'Felipe',
      pais: 'España'
    });
  }


  ngAfterViewInit() {
    this.didInit = true;
  }
}
