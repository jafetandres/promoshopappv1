import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.page.html',
  styleUrls: ['./modal-login.page.scss'],
})
export class ModalLoginPage implements OnInit {

  loginUser = {
    username: 'jafetandres@hotmail.com',
    password: 'Jagq1995'
  }

  constructor(private modalCtrl: ModalController,
    private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private router: Router,
    private uiService: UiServiceService
  ) { }

  ngOnInit() {
  }

  salirConArgumentos() {
    this.modalCtrl.dismiss({
      nombres: 'Felipe',
      pais: 'España'
    });
  }

  async login(fLogin: NgForm) {
    if (fLogin.invalid) { return; }
    console.log("login" + this.loginUser);
    const valido = await this.usuarioService.login(this.loginUser.username, this.loginUser.password);

    if (valido) {
      //navegar al tabs
      this.navCtrl.navigateRoot('/main/tabs/tab1',{animated:true});
      // this.router.navigate(['/main/tabs/tab1']);
      this.modalCtrl.dismiss();
    } else {
      //mostrar alerta de usuario y contrasena no correcta
      this.uiService.alertaInformativa('Usuario y contraseña no son correctos.');
    }
  }

}
