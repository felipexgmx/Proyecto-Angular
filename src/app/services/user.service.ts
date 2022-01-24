import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  createUser(data:any):Observable<any>{
    let urlService = environment.urlBase + "creaUsuario";
    return this._http.post(urlService, data);
  }

  readAllUsers():Observable<any>{
    let urlService = environment.urlBase + "usuarios";
    return this._http.get(urlService);
  }

  deleteUser(id:number):Observable<any>{
    let urlService = environment.urlBase + "eliminaUsuario/" + id;
    return this._http.get(urlService);
  }
}
