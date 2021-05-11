import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {
  @Input() categorias: any;

  slideOpts = {
    slidesPerView: 1.5,
    freeMode: true
  };

  constructor() { }

  ngOnInit() {}

}
