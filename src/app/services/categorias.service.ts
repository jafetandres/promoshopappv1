import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../interfaces/interfaces';
import { environment } from '../../environments/environment'
import { tap } from 'rxjs/operators';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get(`${URL}/categoriaEmpresaProducto/`).pipe( tap(console.log));
  }

  getSubCategorias(id_categoria) {
    return this.http.get(`${URL}/categorias/recuperarSubcategorias`,id_categoria).pipe( tap(console.log));
  }
}


