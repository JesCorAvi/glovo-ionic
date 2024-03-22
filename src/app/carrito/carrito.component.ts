import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service'


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent  implements OnInit {
  items = this.CarritoService.getItems();

  constructor(private CarritoService:CarritoService) { }

  ngOnInit() { 
    console.log(this.items)
  }

}
