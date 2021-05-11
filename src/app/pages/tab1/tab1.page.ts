import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpgenericoService } from 'src/app/services/httpgenerico.service';
import { HomeService } from '../../services/home.service';
import { NavController } from '@ionic/angular';
import { VerRestaurantesPage } from '../ver-restaurantes/ver-restaurantes.page';
import { RestauranteService } from '../../services/restaurante.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  categorias: any;
  banners: any;
  productosMarketplace: any;
  licores: any;

  buttonsSlide = {
    slidesPerView: 3.5
  };
  marketplaceSlide = {
    slidesPerView: 1.2
  };
  bannerHome = {
    touchReleaseOnEdges: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    speed: 1500
  };



  constructor(private homeService: HomeService,
    private restauranteService: RestauranteService,
    public httpgenerico: HttpgenericoService,
    private router: Router,
    private navCtrl: NavController) { }


  ngOnInit() {

    this.categorias = this.homeService.getCategoriasComida();
    this.banners = this.homeService.getBanners();
    this.productosMarketplace = this.homeService.getProductosMarketplace();
    this.licores = this.homeService.getLicores();

    // let peticion = { pagina: 1, query: "todos" };
    // console.log(this.httpgenerico.postAuth("procesador/getComprasUsuario", peticion));
  }

  mostrarRestaurantes() {
    // this.navCtrl.(VerRestaurantesPage);
    this.router.navigate(['/ver-restaurantes']);

  }

  mostrarServicios(){
    this.router.navigate(['/ver-servicios']);
  }
}
