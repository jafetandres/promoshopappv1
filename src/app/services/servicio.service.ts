import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  servicios: any;
  paginaServicios = 0;
  categoriaActual = '';

  constructor(private http: HttpClient) { }

  // getListaServicios(pull: boolean = false,categoria_id='todas') {
  //   if (pull) {
  //     this.paginaServicios = 0;
  //   }
  //   this.paginaServicios++;
  //   return this.http.get(`${URL}/listaserviciosporcategoria/${categoria_id}?page=${this.paginaServicios}`);
  // }

  getListaServicios(categoria_id = 'todas') {
    // if (pull) {
    //   this.paginaServicios = 0;
    // }
    this.paginaServicios++;
    return this.http.get(`${URL}/listaserviciosporcategoria/${categoria_id}?page=${this.paginaServicios}`);
  }

  getListaServiciosPorCategoria(categoria, pull: boolean) {
    if (pull) {
      this.paginaServicios = 0;
    }
    // this.paginaServicios++;

    if (this.categoriaActual === categoria) {
      this.paginaServicios++;

    } else {
      this.paginaServicios = 1;
      this.categoriaActual = categoria;
    }


    return this.http.get(`${URL}/listaserviciosporcategoria/${categoria}?page=${this.paginaServicios}`);
  }

  getCategoriasServicios() {
    return this.http.get(`${URL}/listacategoriasservicios`);
  }
}
