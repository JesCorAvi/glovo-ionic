import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Platos', url: 'platos'},
    { title: 'Carrito', url: 'carrito'  },
    { title: 'Pedidos', url: 'pedidos'  },
  ];
  constructor() {}
}
