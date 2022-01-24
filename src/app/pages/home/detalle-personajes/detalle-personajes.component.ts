import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-detalle-personajes',
  templateUrl: './detalle-personajes.component.html',
  styleUrls: ['./detalle-personajes.component.css']
})
export class DetallePersonajesComponent implements OnInit {

  id: any
  personaje: any = null;
  hijos: any = [];
  constructor(private _personajeService: PersonajesService, private _activedRoute: ActivatedRoute,private route: Router) {
    console.log(this.route.getCurrentNavigation()?.extras?.state?.id);
    this.id = this.route.getCurrentNavigation()?.extras?.state?.id;
   }

  ngOnInit(): void {
    this.getPersonaje(this.id);
  }

  getPersonaje(id: any){
  this._personajeService.getPersonaje(id).subscribe((personaje) => {
    console.log(personaje);
    this.personaje = personaje;
    this.personaje.hijos.forEach((hijo: any) => {
      this.hijos.push(hijo);
    });
    console.log(this.hijos);
  })
  }
}
