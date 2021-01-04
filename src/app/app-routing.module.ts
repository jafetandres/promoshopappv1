import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guards/usuario.guard';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canLoad: [UsuarioGuard]
  },
  {
    path: 'modal-login',
    loadChildren: () => import('./pages/modal-login/modal-login.module').then(m => m.ModalLoginPageModule)
  },
  {
    path: 'modal-signup',
    loadChildren: () => import('./pages/modal-signup/modal-signup.module').then(m => m.ModalSignupPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main/tabs/tab1'
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./pages/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },
  {
    path: 'modal-ver-producto',
    loadChildren: () => import('./pages/modal-ver-producto/modal-ver-producto.module').then( m => m.ModalVerProductoPageModule)
  },
  {
    path: 'cart-marketplace',
    loadChildren: () => import('./pages/cart-marketplace/cart-marketplace.module').then( m => m.CartMarketplacePageModule)
  },
  {
    path: 'modal-agregar-ubicacion',
    loadChildren: () => import('./pages/modal-agregar-ubicacion/modal-agregar-ubicacion.module').then( m => m.ModalAgregarUbicacionPageModule)
  },
  {
    path: 'modal-lista-ubicaciones',
    loadChildren: () => import('./pages/modal-lista-ubicaciones/modal-lista-ubicaciones.module').then( m => m.ModalListaUbicacionesPageModule)
  },
  {
    path: 'modal-ubicaciones-guardadas',
    loadChildren: () => import('./pages/modal-ubicaciones-guardadas/modal-ubicaciones-guardadas.module').then( m => m.ModalUbicacionesGuardadasPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
