import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../../services/restaurante.service';

@Component({
  selector: 'app-ver-restaurantes',
  templateUrl: './ver-restaurantes.page.html',
  styleUrls: ['./ver-restaurantes.page.scss'],
})
export class VerRestaurantesPage implements OnInit {
  restaurantes: any[] = [];
  habilitado = true;

  constructor(private restauranteService: RestauranteService) {
  }

  ngOnInit() {
    this.siguientes(null,true);

  }

  recargar(event) {
    this.siguientes(event, true);
    this.restaurantes = [];
    this.habilitado = true;
  }

  siguientes(event?, pull: boolean = false) {
    this.restauranteService.getListaRestaurantes(pull).subscribe(resp => {
      this.restaurantes.push(...resp['results']);
      if (event) {
        event.target.complete();
        if (resp['next'] === null) {
          this.habilitado = false;
        }
      }
    }, error =>{
      this.habilitado = false;
    });
  }

}
