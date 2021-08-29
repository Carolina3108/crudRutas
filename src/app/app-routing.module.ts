import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { CrearEstudianteComponent } from './crear-estudiante/crear-estudiante.component';
import { EditarEstudianteComponent } from './editar-estudiante/editar-estudiante.component';
const routes: Routes = [
  {path: 'list-estudiantes', component: PrincipalComponent},
  {path: 'nuevo-estudiante', component: CrearEstudianteComponent},
  {path: 'edit-estudiante/:id', component: EditarEstudianteComponent},
  {path: 'editar-estudiante', component: EditarEstudianteComponent},
  {path:'', redirectTo: 'list-estudiantes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
