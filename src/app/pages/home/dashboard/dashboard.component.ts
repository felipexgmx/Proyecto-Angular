import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  perosnaje: Array<any> = [];
  constructor(private _personajesService: PersonajesService, private route: Router ) { }

  ngOnInit(): void {
    this.getPersonajes();
  }

  public getPersonajes() {
    this._personajesService.getAllPersonajes().subscribe((personaje) => {
      console.log(personaje);
      this.perosnaje = personaje;
    })
  }

  public detallePersonaje(id: number) {
    console.log(id);
    this.route.navigate(['detalle'],{
      state: {
        id: id
      }
    });
  }


}
