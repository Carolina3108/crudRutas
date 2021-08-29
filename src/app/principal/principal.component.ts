import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { estudiante } from '../entidades/estudiante';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuario:estudiante= {} as estudiante;
  usuarios:any;

  constructor(private http:HttpClient) { 
    http.get('https://frozen-meadow-48728.herokuapp.com/todos')
    .subscribe(response=>{
      this.usuarios=response;
    });
  }

  getUno(id:number):void{
    this.http.get("ttps://frozen-meadow-48728.herokuapp.com/uno/"+id)
  }

  

  eliminar(id:number):void{
    this.http.delete<estudiante>('https://frozen-meadow-48728.herokuapp.com/eliminar/'+id)
    .subscribe(
      response => {
       alert('Estudiante eliminado');
       window.location.reload();
      },
      error => {
        console.log(error);
    });
  }

  ngOnInit(): void {
  }

}
