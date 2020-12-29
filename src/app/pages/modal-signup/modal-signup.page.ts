import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-modal-signup',
  templateUrl: './modal-signup.page.html',
  styleUrls: ['./modal-signup.page.scss'],
})
export class ModalSignupPage implements OnInit {
  @Input() telefono: string;

  registerUser: Usuario = {
    email: 'jafetandres@hotmail.com',
    username: 'jafetandres@hotmail.com',
    password1: 'Jagq1995',
    password2: 'Jagq1995',
    nombres: 'jafet',
    apellidos: 'galvez',
    celular: '0958735596',
    fecha_nacimiento:'2015-01-01'
  };
  // EMAILPATTERN =
  // "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";

  // myForm: FormGroup = this.formBuilder.group({
  //   nombres: [
  //     "",
  //     Validators.compose([
  //       Validators.required,
  //       Validators.minLength(1),
  //       Validators.maxLength(20),
  //     ]),
  //   ],
  //   apellidos: [
  //     "",
  //     Validators.compose([
  //       Validators.maxLength(30),
  //       Validators.minLength(1),
  //       Validators.required,
  //     ]),
  //   ],
  //   identificacion: ["", Validators.compose([Validators.maxLength(20)])],
  //   direccion: ["", Validators.compose([Validators.maxLength(100)])],
  //   correo: ["", [Validators.required, Validators.pattern(this.EMAILPATTERN)]],
  //   fechaNacimiento: [""],
  //   password: [
  //     "",
  //     Validators.compose([
  //       Validators.required,
  //       Validators.minLength(6),
  //       Validators.maxLength(20),
  //     ]),
  //   ],
  //   genero: [""],
  // });



  constructor(private modalCtrl: ModalController,
    public alertController: AlertController,
    private usuarioService: UsuarioService,
    private router: Router,
    private uiService: UiServiceService,
    private navCtrl: NavController

   
    ) { }

  ngOnInit() {
  }

  async enviarMensaje(){
    await this.usuarioService.enviarMensaje(this.registerUser.celular);
  }


  salirConArgumentos() {
    this.modalCtrl.dismiss({
      nombres: 'Felipe',
      pais: 'España'
    });
  }

  async registro(fRegistro: NgForm) {
    if(fRegistro.invalid){return;}
    
    const valido = await this.usuarioService.registro(this.registerUser);

    if (valido) {
      //navegar al tabs
      this.navCtrl.navigateRoot('/main/tabs/tab1',{animated:true});
      // this.router.navigate(['/main/tabs/tab1']);
      this.modalCtrl.dismiss();
    } else {
      //mostrar alerta de usuario y contrasena no correcta
      this.uiService.alertaInformativa('El correo electrónico ya existe.');
    }

  }
  async verificarTelefono() {
    const promt = await this.alertController.create({
      header: 'Código de verificación',
      subHeader: 'Se ah enviado un código de verificación al ' + this.telefono,
      inputs: [
        {
          name: 'name1',
          type: 'number',
          placeholder: 'Ingrese el código de verificación'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Enviar',
          handler: (response) => {
            const smsCode = response.code;

          }
        }
      ]
    });
    await promt.present();
  }
}


