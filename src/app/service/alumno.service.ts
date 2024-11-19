import { Injectable, Input } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Alumno } from '../models/alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private alumnosUrl = 'http://localhost:8080/alumnos';

  public id: number = 0;

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  constructor(private http: HttpClient) { }

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.alumnosUrl);
  } // http always returns an observable

  obtenerAlumnoPorId(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(this.alumnosUrl+'/buscar?id='+id);
  }

  crearAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.alumnosUrl, alumno);
  }

  actualizarAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(this.alumnosUrl, alumno);
  }

  eliminarAlumno(id: number): Observable<Alumno> {
    return this.http.delete<Alumno>(this.alumnosUrl+'?id='+id);
  }

  inscribirAlumno(alumnoId: number, cursoId: number): Observable<Alumno> {
    return this.http.put<Alumno>(this.alumnosUrl + '/inscribir?alumnoId=' + alumnoId + '&cursoId=' + cursoId, null);
  }

  darDeBajaAlumno(alumnoId: number, cursoId: number): Observable<Alumno> {
    return this.http.put<Alumno>(this.alumnosUrl + '/darDeBaja?alumnoId=' + alumnoId + '&cursoId=' + cursoId, null);
  }

}
