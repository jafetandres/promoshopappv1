import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment'
import { throwError } from 'rxjs';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class HttpgenericoService {

  token  = "";
  constructor(private http: HttpClient, private storage: Storage) { 
    // this.storage.set("id_token", "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcm9tb2Npb25lc2N1ZW5jYS5zaG9wQGdtYWlsLmNvbSIsImlzcyI6Imh0dHA6Ly9wcm9tb3Nob3AuYXBwL05HTkRpZ2l0YWxHdWlkZS9yZXN0L3VzdWFyaW9zL2xvZ2luIiwiaWF0IjoxNjA2NTc3MjY3LCJleHAiOjE2MDc3ODY4Njd9.qwUHMhkKuvRx0ty0DJrYMdbjvXORyP8QGiMPJCPE6EkWhSH1YFrz24q5pLANJyb4U51gs1nCQRZmUbjX5xBS1Q");
    // this.storage.get("id_token").then((token) => {
    //   this.token = token;
    // });
  }


  actualizarToken(){
    // this.storage.get("id_token").then((token) => {
    //   this.token = token;
    // });
  }

  public postAuth(url, objeto){
    console.log("Post...");

    this.actualizarToken();
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      });

      return new Promise( resolve => {
  
        // this.http.post(`${URL}`+ url, objeto, { headers })
        //   .subscribe( resp => {
  
        //   alert(resp);
          
        //     resolve(true);
        //   });
      });
  
   // return this.http.post(`${URL}`+ url, objeto, httpOptions).pipe();

  }


  public getAuth(url){
    
  }



  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };





  public post(url){

  }


  public get(url){
    
  }
}
