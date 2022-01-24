import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router'
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _loginService : LoginService, private _route: Router, private _notification:NotificationService) { }

  ngOnInit(): void {
  }


  cerrarSesion(){
    this._loginService.logOut();
    this._route.navigate(['/login']);
    this._notification.showError("Ha cerrado sesión", "");
  }

  seccionUsuarios(){
    this._route.navigate(['/usuarios']);
  }
}
