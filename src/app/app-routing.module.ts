import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PlatosComponent } from './platos/platos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DetallePlatoComponent } from './detalle-plato/detalle-plato.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'platos',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'platos',
    component: PlatosComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: 'pedidos',
    component: PedidosComponent
  },
  {
    path: 'plato/:id',
    component: DetallePlatoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
