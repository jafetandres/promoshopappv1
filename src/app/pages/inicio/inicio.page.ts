import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, ModalController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { ModalLoginPage } from '../modal-login/modal-login.page';
import { ModalSignupPage } from '../modal-signup/modal-signup.page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  @ViewChild('slidePrincipal') slides: IonSlides;

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
  ];
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,

    autoplay: {
      delay: 2000,
      stopOnLastSlide: true,
      disableOnInteraction: false
    },
    speed: 2000,
    allowTouchMove: false



  };

  constructor(private usuarioService: UsuarioService,
    private modalCtrl: ModalController) { }

 
    ngOnInit() {
      // this.slides.lockSwipes(true);
    }
    ionViewDidEnter() {
      // this.slides.lockSwipes(true);
    }
  
  
  
    registro(fRegistro: NgForm) {
      console.log(fRegistro.valid);
  
    }

    onClick(){
      this.usuarioService.enviarMensaje('958735596');
    }
  
    // mostrarRegistro() {
    //   this.slides.lockSwipes(false);
    //   this.slides.slideTo(1);
    //   this.slides.lockSwipes(true);
  
    // }
    // mostrarLogin() {
    //   this.slides.lockSwipes(false);
    //   this.slides.slideTo(0);
    //   this.slides.lockSwipes(true);
  
    // }
  
    async mostrarModalLogin() {
      const modal = await this.modalCtrl.create({
        component: ModalLoginPage,
        componentProps: {
          nombres: 'ricardo',
        }
      });
      await modal.present();
  
      const resp = await modal.onDidDismiss();
      console.log(resp);
    }
  
  
    async mostrarModalSignUp(){
      const modal = await this.modalCtrl.create({
        component: ModalSignupPage,
        componentProps: {
          telefono: '+593958735596',
        }
      });
      await modal.present();
  
      const resp = await modal.onDidDismiss();
      console.log(resp);
    }

}
