import { EventEmitter, Injectable } from '@angular/core';
import { OSNotificationPayload, OneSignal, OSNotification } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PushService {
  mensajes: OSNotificationPayload[] = [
    // {
    //   title: 'Tutulo de la push',
    //   body: 'este es el body de la push',
    //   date: new Date
    // }
  ];
  userId: string;

  pushListener = new EventEmitter<OSNotificationPayload>();

  constructor(
    private oneSignal: OneSignal,
    private storage: Storage
  ) {
    this.cargarMensajes();
  }
  async getMensajes() {
    await this.cargarMensajes();
    return [...this.mensajes];
  }

  configuracionInicial() {

    this.oneSignal.startInit('0603627e-f578-4f08-b7a8-48feb261c7c8', '226303211374');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
      console.log("notificacion recibida", noti);
      this.notificacionRecibida(noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe(async (noti) => {
      console.log("notificacion abierta", noti);
      await this.notificacionRecibida(noti.notification);
    });


    // this.oneSignal.getIds().then(info => {
    //   this.userId = info.userId || 'bb4c4088-3427-44ff-8380-570aa6c1ce1a';
    //   console.log(this.userId);
    // });

    this.oneSignal.endInit();
  }

  async getUserIdOneSignal() {
    console.log('Cargando userId');
    // Obtener ID del suscriptor
    const info = await this.oneSignal.getIds();
    this.userId = info.userId;
    return info.userId;
  }
  async notificacionRecibida(noti: OSNotification) {

    await this.cargarMensajes();
    const payload = noti.payload;
    const existePush = this.mensajes.find(mensaje => mensaje.notificationID === payload.notificationID);

    if (existePush) {
      return;
    }

    this.mensajes.unshift(payload);
    this.pushListener.emit(payload);
    await this.guardarMensajes();

  }
  guardarMensajes() {

    this.storage.set('mensajes', this.mensajes)


  }

  async cargarMensajes() {
    this.mensajes = await this.storage.get('mensaje') || [];

    return this.mensajes;
  }

  async borrarMensajes() {
    await this.storage.clear();
    this.mensajes = [];
    this.guardarMensajes();
  }


}
