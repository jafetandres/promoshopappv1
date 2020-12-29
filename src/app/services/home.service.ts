import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { tap } from 'rxjs/operators';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get(`${URL}/categoriaEmpresaProducto/`).pipe( tap(console.log));
  }
  getBanners(){
    return this.http.get(`${URL}/banner/`).pipe( tap(console.log));
  }
}
