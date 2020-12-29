import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/interfaces';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {

  @Input() categoria: Categoria= {};
  
  constructor() { 
    console.log("entro a categoria");
    }

  ngOnInit() {}

}
