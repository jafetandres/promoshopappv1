import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/interfaces';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {

  @Input() categoria: Categoria = {};
  nombre: string;
  backgroundColor: string;

  constructor() {
  }

  ngOnInit() {

    if (this.categoria.nombre.split(" ")[0] == 'Comida') {
      this.categoria.nombre = this.categoria.nombre.split(" ")[1];
      if (this.categoria.nombre == 'China') {
        this.backgroundColor = 'rgb(135, 100, 68, 0.548)';
      }
      if (this.categoria.nombre == 'Mexicana') {
        this.backgroundColor = 'rgb(160, 55, 35, 0.548)';
      }
      if (this.categoria.nombre == 'Rapida') {
        this.backgroundColor = 'rgb(90, 132, 65, 0.548)';
      }
     
    }
    if (this.categoria.nombre == 'Mariscos') {
      this.backgroundColor = 'rgb(132, 140, 44, 0.548)';
    }
  }

}
