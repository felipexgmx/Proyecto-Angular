import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usuarios: any = Array<any>();
  usuariosCopia: any = Array<any>();
  formUser: any;

  constructor(private _service: UserService, private _notification: NotificationService, private _router:Router) { }

  ngOnInit(): void {
    this.obtieneUsuarios();

    this.formUser = new FormGroup({
      nombre: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required),
      sueldo: new FormControl('', Validators.required)
    });


  }

  obtieneUsuarios(){
    this._service.readAllUsers().subscribe(data => {
      this.usuarios = data;
      this.usuariosCopia = data;
    });
  }

  filtraUsuarios(nombre:any){
    this.usuariosCopia = this.usuarios.filter((x:any) => x.nombre.includes(nombre.target.value));
  }

  agregarUsuario(){
    const { nombre, correo, fechaNacimiento, sueldo } = this.formUser.value;
    this._service.createUser({ nombre, correo, fechaNacimiento, sueldo }).subscribe(data => {
      if(data){
        this._notification.showSuccess("Usuario creado con exito", "");
        this.obtieneUsuarios();
      }else{
        this._notification.showError("Error interno", "");
      }
    })
  }

  eliminarUsuario(nombre:any, id:number){
    Swal.fire({
      title: `¿Seguro que quieres eliminar al usuario ${nombre}?`,
      showDenyButton: true,
      confirmButtonText: 'Si, borrar usuario.',
      denyButtonText: `No borrar usuario.`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._service.deleteUser(id).subscribe(data => {
          if(data){
            Swal.fire('Éxito!', 'El usuario se ha borrado correctamente', 'success');
            this.obtieneUsuarios();
          }else{
            Swal.fire('Error', "Ha ocurrido un error interno", "error");
          }
        })
      } else if (result.isDenied) {
        Swal.fire('Error', 'El usuario no se ha eliminado', 'error')
      }
    })
  }

  editarUsuario(data:any){
    this._router.navigate(['editar-usuario'], {
      state: {
        informacionUsuario: data
      }
    });
  }
}
