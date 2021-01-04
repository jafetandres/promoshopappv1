import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { HttpgenericoService } from 'src/app/services/httpgenerico.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  categorias: any;
  banners: any;
  productosMarketPlace:any;

  buttonsSlide = {
    slidesPerView: 3.5
  };
  marketplaceSlide = {
    slidesPerView: 1.2
  };
  publicidadSlide = {
    touchReleaseOnEdges: true
  };



  constructor(private homeService: HomeService, 
    public httpgenerico: HttpgenericoService) { }


  ngOnInit() {

    this.categorias = this.homeService.getCategorias();
    this.banners = this.homeService.getBanners();
    this.productosMarketPlace= this.homeService.getProductosMarketPlace();
    // let peticion = { pagina: 1, query: "todos" };
    // console.log(this.httpgenerico.postAuth("procesador/getComprasUsuario", peticion));
  }



}
