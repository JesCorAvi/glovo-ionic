import { Injectable } from '@angular/core';
import { DetallePlatoComponent } from './detalle-plato/detalle-plato.component'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  items: Array<any> = [];

  addToCart(plato: any) {
    const found = this.items.find((element) => element[0] === plato);
    if (found) {
      this.items[this.items.indexOf(found)][1]++;
    } else {
      this.items.push([plato, 1]);
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor(
    private http: HttpClient
  ) {}}
