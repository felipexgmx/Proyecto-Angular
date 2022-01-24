import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDto } from '../Models/login-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  get userStorage():any{
    return localStorage.getItem('user') ? true : false;
  }

  constructor(private _http: HttpClient) { }

  loginUser(data:LoginDto): Observable<any>{
    let urlService = environment.urlBase + "usuario";
    return this._http.post(urlService, data);
  }

  saveUser(data:any): void{
    localStorage.setItem("user", data);
  }

  logOut(){
    localStorage.removeItem("user");
  }
}
