import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { estudiante } from '../entidades/estudiante';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent implements OnInit {
  usuario:estudiante = {} as estudiante;
  usuarios:any;
  id: string | null;

  constructor(
    private http: HttpClient,
              private aRoute: ActivatedRoute,
              private router: Router,  private toastr: ToastrService
  ) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  //editar
  editar(id:number){
   
    this.http.get<estudiante>("https://frozen-meadow-48728.herokuapp.com/uno/"+id)
    .subscribe(
      response => {
        this.usuario=response;
      },
      error => {
        console.log(error);
      });
  }

  editarRegistro() : void{
    this.http.get<estudiante>("https://frozen-meadow-48728.herokuapp.com/uno/"+this.id)
    .subscribe(
      response => {
        this.toastr.success('Registro actualizado!');
        this.usuario=response;
      },
      error => {
        console.log(error);
      });

  }

  ngOnInit(): void {
    this.editarRegistro();
  }

}
