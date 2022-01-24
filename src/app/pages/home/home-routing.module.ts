import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetallePersonajesComponent } from './detalle-personajes/detalle-personajes.component';
import { HomeComponent } from './home.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children:[
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home', component: DashboardComponent
      },
      {
        path: 'detalle', component: DetallePersonajesComponent
      },
      {
        path: 'usuarios', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'editar-usuario',
        component: EditUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
