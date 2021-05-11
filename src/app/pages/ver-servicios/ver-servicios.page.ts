import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-ver-servicios',
  templateUrl: './ver-servicios.page.html',
  styleUrls: ['./ver-servicios.page.scss'],
})
export class VerServiciosPage implements OnInit {
  servicios: any[] = [];
  habilitado = true;
  categorias: any;
  @ViewChild(IonSegment) segment: IonSegment;

  constructor(private servicioService: ServicioService) { }

  async ngOnInit() {
    await this.getCategorias();
    // this.segment.value = ""+22;
    this.cargarServicios('todas');
  }

  getCategorias() {
    this.servicioService.getCategoriasServicios().subscribe(resp => {
      this.categorias = resp;
      console.log(this.categorias[0].id);
    })
  }
  recargar(event) {
    this.cargarServicios(this.segment.value, event, true);
    this.servicios = [];
    this.habilitado = true;
  }
  // getServiciosPorCategoria(event, pull: boolean = false) {
  //   console.log(event.detail.value);
  //   this.servicioService.getListaServiciosPorCategoria(pull,event.detail.value).subscribe(resp => {
  //     this.servicios.push(...resp['results']);
  //     if (event) {
  //       event.target.complete();
  //       if (resp['next'] === null) {
  //         this.habilitado = false;
  //       }
  //     }
  //   });
  // }
  // siguientes(event?, pull: boolean = false) {

  //     this.servicioService.getListaServicios(pull).subscribe(resp => {
  //       this.servicios.push(...resp['results']);
  //       if (event) {
  //         event.target.complete();
  //         if (resp['next'] === null) {
  //           this.habilitado = false;
  //         }
  //       }
  //     });

  // }

  cambioCategoria(event) {
    this.servicios = [];
    this.cargarServicios(event.detail.value);
    this.habilitado = true;
  }

  cargarServicios(categoria: string, event?, pull: boolean = false) {
    this.servicioService.getListaServiciosPorCategoria(categoria, pull).subscribe(resp => {
      this.servicios.push(...resp['results']);
      if (event) {
        event.target.complete();
        if (resp['next'] === null) {
          this.habilitado = false;
        }
      }
    }, error => {
      this.habilitado = false;
    });
  }


  loadData(event) {
    this.cargarServicios(this.segment.value, event);
  }



}
