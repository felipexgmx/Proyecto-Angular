import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  urlApi: String = environment.urlApi;
  constructor(private _httpClient: HttpClient) { }

  public getAllPersonajes(): Observable<Array<any>> {
    let url = this.urlApi + 'personajes';
    return this._httpClient.get<Array<any>>(url);
}

public getPersonaje(id: number): Observable<Array<any>> {
  let url = this.urlApi + 'personajes/' + id;
  return this._httpClient.get<Array<any>>(url);
}

}