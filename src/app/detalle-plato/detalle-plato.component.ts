import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { detallePlatosService } from '../detalle-plato.service'
import { CarritoService } from '../carrito.service'


@Component({
  selector: 'app-detalle-plato',
  templateUrl: './detalle-plato.component.html',
  styleUrls: ['./detalle-plato.component.scss'],
})
export class DetallePlatoComponent  implements OnInit {
  platoP: any[] = [];
  constructor(private route: ActivatedRoute, private detallePlatosService: detallePlatosService, private CarritoService: CarritoService) {
   }

  addToCart(plato: any) {
    this.CarritoService.addToCart(plato);
  }
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    this.detallePlatosService.getPlato(productIdFromRoute).subscribe((data)=>{this.platoP = data.meals});
    console.log(productIdFromRoute);
  }
}
