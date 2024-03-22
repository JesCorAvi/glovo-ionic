import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root',
})
export class detallePlatosService {
 private baseUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

constructor(private http: HttpClient) {}

getPlato(id:number): Observable<any> {
  console.log(this.baseUrl + id);
  return this.http.get(this.baseUrl + id);
  }
}