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

  getBanners() {
    return this.http.get(`${URL}/listabannerhome`).pipe(tap(console.log));
  }
  getCategoriasComida() {
    return this.http.get(`${URL}/categoriascomidahome`).pipe(tap(console.log));
  }
  getProductosMarketplace() {
    return this.http.get(`${URL}/productosmarketplacehome`).pipe(tap(console.log));
  }
  getLicores() {
    return this.http.get(`${URL}/licoreshome`).pipe(tap(console.log));
  }
}
