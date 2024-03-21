import { Component, OnInit } from '@angular/core';
import { listaPlatosService } from '../lista-platos.service'
import { listaPlatos } from '../lista-platos.interface'
@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.scss'],
})
export class PlatosComponent  implements OnInit {
  listaP: any[] = [];

  constructor(private listaPlatosService: listaPlatosService) {}

  ngOnInit() {
    this.listaPlatosService.getPlatos().subscribe((platos)=>{this.listaP = platos.meals});
  }
}