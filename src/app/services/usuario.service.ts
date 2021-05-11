import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment'
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { Usuario } from '../interfaces/interfaces';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PushService } from './push.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  token: string = null;
  player_id: string = null;
  private usuario: Usuario = {};
  private ubicaciones: any = [];

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private firebaseAuthentication: FirebaseAuthentication,
    private router: Router,
    private navCtrl: NavController,
    private pushService: PushService
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
        .subscribe(async resp => {
          if (resp['key'] != null) {
            await this.guardarToken(resp['key']);
            await this.validaToken();
            await this.guardarPlayerId();
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
    await this.validaToken();
  }

  logout() {
    this.token = null;
    this.usuario = null;
    this.storage.clear();
    this.navCtrl.navigateRoot('/inicio', { animated: true });
  }

  async registro(usuario: Usuario) {
    usuario.player_id = await this.pushService.getUserIdOneSignal();
    return new Promise(resolve => {
      this.http.post(`${URL}/auth/registration/`, usuario)
        .subscribe(async resp => {
          if (resp['key'] != null) {
            await this.guardarToken(resp['key']);
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
      this.http.get(`${URL}/usuario`, { headers })
        .subscribe(resp => {
          if (resp['ok']) {
            this.usuario = resp['usuario'];
            resolve(true);
          } else {
            this.navCtrl.navigateRoot('/inicio', { animated: true });
            resolve(false);
          }
        }, error => {
          if (error.status === 401) {
            this.navCtrl.navigateRoot('/inicio', { animated: true });
            resolve(false);
          }
        });
    });
  }



  async getUbicacionesUsuario() {
    await this.cargarToken();
    if (!this.token) {
      this.navCtrl.navigateRoot('/inicio', { animated: true });
    }
    const headers = new HttpHeaders({
      'Authorization': 'Token ' + this.token
    });
    return this.http.get(`${URL}/listarubicaciones`, { headers });
  }

  async getTarjetasUsuario() {
    await this.cargarToken();
    if (!this.token) {
      this.navCtrl.navigateRoot('/inicio', { animated: true });
    }
    const headers = new HttpHeaders({
      'Authorization': 'Token ' + this.token
    });
    return this.http.get(`${URL}/listartarjetas`, { headers });
  }



  async registrarTarjetasUsuario(tarjeta) {
    await this.cargarToken();
    if (!this.token) {
      this.navCtrl.navigateRoot('/inicio', { animated: true });
    }
    const headers = new HttpHeaders({
      'Authorization': 'Token ' + this.token
    });
    return this.http.post(`${URL}/registrartarjeta`, tarjeta, { headers });
  }

  async guardarPlayerId() {

    await this.cargarToken();
    if (!this.token) {
      this.navCtrl.navigateRoot('/inicio', { animated: true });
    }
    const headers = new HttpHeaders({
      'Authorization': 'Token ' + this.token
    });
    // this.player_id = await this.pushService.getUserIdOneSignal();
    this.player_id = 'prueba123player';

    const data = { player_id: this.player_id }
    console.log(this.player_id);
    this.http.put(`${URL}/actualizarplayerid`,data, { headers })
      .subscribe(resp => {
        console.log(resp);
      });
  }
}
