import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  restaurantes: any;
  paginaRestaurantes = 0;
  constructor(private http: HttpClient) { }

  getListaRestaurantes(pull: boolean) {
    if (pull) {
      this.paginaRestaurantes = 0;
    }
    this.paginaRestaurantes++;
    return this.http.get(`${URL}/listarestaurantes?page=${this.paginaRestaurantes}`);
  }
  getListaProductosPorEmpresa(id) {
    return this.http.get(`${URL}/listaproductosporempresa/${id}`);
  }
}
