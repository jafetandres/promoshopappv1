import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PipesModule } from '../pipes/pipes.module';
import { EmpresaComponent } from './empresa/empresa.component';
import { HeaderBackComponent } from './header-back/header-back.component';
import { ProductoInSlideComponent } from './producto-in-slide/producto-in-slide.component';



@NgModule({
  declarations: [
    CategoriaComponent,
    CategoriasComponent,
    EmpresaComponent,
    HeaderBackComponent,
    ProductoInSlideComponent

  ],
  exports:[
    CategoriasComponent,
    HeaderBackComponent,
    ProductoInSlideComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
