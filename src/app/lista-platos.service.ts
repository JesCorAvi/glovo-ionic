import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listaPlatos } from './lista-platos.interface'; // Import the Comment interface

@Injectable({
 providedIn: 'root',
})
export class listaPlatosService {
 private baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';

constructor(private http: HttpClient) {}

getPlatos(): Observable<any> {
  return this.http.get(this.baseUrl);
  }
}