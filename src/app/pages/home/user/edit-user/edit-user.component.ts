import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  formEditUser: any;
  infoUser: any;
  constructor(private _router: Router) { 
    if(this._router.getCurrentNavigation()?.extras.state === undefined){
      this._router.navigate(['usuarios']);
    }else{
      this.infoUser = this._router.getCurrentNavigation()?.extras?.state?.informacionUsuario;
      
    }
  }

  ngOnInit(): void {
    this.formEditUser = new FormGroup({
      nombre: new FormControl(this.infoUser.nombre, Validators.required),
      correo: new FormControl(this.infoUser.correo, Validators.required)
    });
  }

}
