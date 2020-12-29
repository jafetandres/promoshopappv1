import { Component, OnInit } from '@angular/core';
import { HttpgenericoService } from 'src/app/services/httpgenerico.service';
import { CategoriasService } from '../../services/categorias.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  categorias: any;
  banners: any;

  buttonsSlide = {
    slidesPerView: 3.5
  };
  marketplaceSlide = {
    slidesPerView: 1.2
  };
  publicidadSlide = {
    touchReleaseOnEdges: true
  };



  constructor(private homeService: HomeService, public httpgenerico: HttpgenericoService) { }


  ngOnInit() {

    this.categorias = this.homeService.getCategorias();
    this.banners = this.homeService.getBanners();
    // let peticion = { pagina: 1, query: "todos" };

    // console.log(this.httpgenerico.postAuth("procesador/getComprasUsuario", peticion));

  }

}
