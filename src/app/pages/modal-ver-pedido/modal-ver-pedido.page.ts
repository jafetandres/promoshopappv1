import { Component, OnInit } from '@angular/core';
import { Platform, LoadingController, ToastController } from "@ionic/angular";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  GoogleMapsAnimation,
  MyLocation,
  Marker,
  Environment
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-modal-ver-pedido',
  templateUrl: './modal-ver-pedido.page.html',
  styleUrls: ['./modal-ver-pedido.page.scss'],
})
export class ModalVerPedidoPage implements OnInit {
  map: GoogleMap;
  loading: any;

  constructor( public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private platform: Platform) { 

      platform.ready().then(() => {
        if (document.URL.startsWith('http')){
          Environment.setEnv({
            API_KEY_FOR_BROWSER_RELEASE: "AIzaSyA9esa9PaJXtLN_vJLo1Uvgv3saFYh1n6k",
            API_KEY_FOR_BROWSER_DEBUG: "AIzaSyA9esa9PaJXtLN_vJLo1Uvgv3saFYh1n6k"
          });
        }
    });
    }





  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }



  loadMap() {
    // Esta función inicializa la propiedad de clase
    // map
    // que va a contener el control de nuestro mapa de google

    // Para crear nuestro mapa debemos enviar como parametros
    // el id del div en donde se va a renderizar el mapa (paso anterior)
    // y las opciones que configuran nuestro mapa
  // This code is necessary for browser

    this.map = GoogleMaps.create("map_canvas", {
      camera: {
        target: {
          lat: -2.1537488,
          lng: -79.8883037
        },
        zoom: 18,
        tilt: 30
      }
    });
  }

  async localizar() {
    // Limpiamos todos los elementos de nuestro mapa
    this.map.clear();

    // Creamos un componente de Ionic para mostrar un mensaje
    // mientras obtenemos esperamos que termine el proceso de
    // obtener la ubicación
    this.loading = await this.loadingCtrl.create({
      message: "Espera por favor..."
    });

    // Presentamos el componente creado en el paso anterior
    await this.loading.present();

    // Ejecutamos el método getMyLocation de nuestra propiedad de clase
    // map
    // para obtener nuestra ubicación actual
    this.map
      .getMyLocation()
      .then((location: MyLocation) => {
        // Una vez obtenida la ubicación cerramos el mensaje de diálogo
        this.loading.dismiss();

        // Movemos la camara a nuestra ubicación con una pequeña animación
        this.map.animateCamera({
          target: location.latLng,
          zoom: 17,
          tilt: 30
        });

        // Agregamos un nuevo marcador
        let marker: Marker = this.map.addMarkerSync({
          title: "Estoy aquí!",
          snippet: "This plugin is awesome!",
          position: location.latLng,
          animation: GoogleMapsAnimation.BOUNCE
        });

        // Mostramos un InfoWindow
        marker.showInfoWindow();

        // Podemos configurar un evento que se ejecute cuando
        // se haya dado clic
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          this.showToast("clicked!");
        });
      })
      .catch(error => {
        // En caso de que haya un problema en obtener la
        // ubicación
        this.loading.dismiss();
        this.showToast(error.error_message);
      });
  }

  // Función que muestra un Toast en la parte inferior
  // de la pantalla
  async showToast(mensaje) {
    let toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: "bottom"
    });

    toast.present();
  }

  // loadMap() {

  //   // This code is necessary for browser
  //   Environment.setEnv({
  //     'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyA9esa9PaJXtLN_vJLo1Uvgv3saFYh1n6k',
  //     'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyA9esa9PaJXtLN_vJLo1Uvgv3saFYh1n6k'
  //   });

  //   let mapOptions: GoogleMapOptions = {
  //     camera: {
  //       target: {
  //         lat: 43.0741904,
  //         lng: -89.3809802
  //       },
  //       zoom: 18,
  //       tilt: 30
  //     }
  //   };

  //   this.map = GoogleMaps.create('map_canvas', mapOptions);

  //   let marker: Marker = this.map.addMarkerSync({
  //     title: 'Ionic',
  //     icon: 'blue',
  //     animation: 'DROP',
  //     position: {
  //       lat: 43.0741904,
  //       lng: -89.3809802
  //     }
  //   });
  //   marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
  //     alert('clicked');
  //   });
  // }

//   ionViewWillLeave() {

//     const nodeList = document.querySelectorAll('._gmaps_cdv_');

//     for (let k = 0; k < nodeList.length; ++k) {
//         nodeList.item(k).classList.remove('_gmaps_cdv_');
//     }
// }
}
