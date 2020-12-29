import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
const DOMINIO = environment.dominio;
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  usuario: Usuario = {};

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();
    console.log(this.usuario);
  }
  // abrirPerfil() {
  //   this.router.navigate(['/perfil-usuario', this.usuario]);
  // }

}
