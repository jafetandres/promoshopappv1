import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment'
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { Usuario } from '../interfaces/interfaces';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  

  token: string = null;
  private usuario: Usuario = {};


  constructor(
    private http: HttpClient,
    private storage: Storage,
    private firebaseAuthentication: FirebaseAuthentication,
    private router: Router,
    private navCtrl: NavController
  ) { }

  enviarMensaje(number: string) {
    try {
      this.firebaseAuthentication.verifyPhoneNumber('+593' + number.toString(), 30000).then(verificationId => {
      }
      );
    } catch (error) {
      alert(error);
    }
  }

  login(username: string, password: string) {
    const data = { username, password }
    return new Promise(resolve => {
      this.http.post(`${URL}/auth/login/`, data)
        .subscribe(resp => {
          if (resp['key'] != null) {
            this.guardarToken(resp['key']);
            console.log(resp['key']);
            resolve(true);
          } else {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
        });

    });

  }

  async guardarToken(token: string) {
    this.token = token;
    await this.storage.set('token', token);

  }

  registro(usuario: Usuario) {
    return new Promise(resolve => {
      this.http.post(`${URL}/auth/registration/`, usuario)
        .subscribe(resp => {
          if (resp['key'] != null) {
            this.guardarToken(resp['key']);
            console.log(resp['key']);
            resolve(true);
          } else {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
        });
    });
  }

  getUsuario() {
    return { ...this.usuario }
  }

  async cargarToken() {
    this.token = await this.storage.get('token') || null;
  }

  async validaToken(): Promise<boolean> {
    await this.cargarToken();
    if (!this.token) {
      this.navCtrl.navigateRoot('/inicio', { animated: true });
      return Promise.resolve(false);
    }
    return new Promise<boolean>(resolve => {

      const headers = new HttpHeaders({
        'Authorization': 'Token ' + this.token
      });
      this.http.get(`${URL}/usuario/`, {headers})
      .subscribe(resp =>{

        if(resp['ok']){
          this.usuario=resp['usuario'];
          resolve(true);
        }else{
          this.navCtrl.navigateRoot('/inicio', { animated: true });
          resolve(false);
        }
        
      });

      // if (this.token) {
      //   resolve(true);
      // } else {
      //   this.navCtrl.navigateRoot('/inicio', { animated: true });
      //   resolve(false);
      // }
    });
  }

}
