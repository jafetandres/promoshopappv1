import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PipesModule } from '../pipes/pipes.module';
import { EmpresaComponent } from './empresa/empresa.component';
import { HeaderBackComponent } from './header-back/header-back.component';
import { ProductoInSlideComponent } from './producto-in-slide/producto-in-slide.component';
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { EmpresaHorizontalComponent } from './empresa-horizontal/empresa-horizontal.component';



@NgModule({
  declarations: [
    CategoriaComponent,
    CategoriasComponent,
    EmpresaComponent,
    HeaderBackComponent,
    ProductoInSlideComponent,
    ModalHeaderComponent,
    EmpresaHorizontalComponent

  ],
  exports:[
    CategoriasComponent,
    HeaderBackComponent,
    ProductoInSlideComponent,
    ModalHeaderComponent,
    EmpresaHorizontalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
