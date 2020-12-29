import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/interfaces';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
})
export class EmpresaComponent implements OnInit {

  @Input() categoria: Categoria= {};

  constructor() { }

  ngOnInit() {}

}
