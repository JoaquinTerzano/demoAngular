import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Curso } from '../models/curso';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private cursosUrl = 'http://localhost:8080/cursos';

  public id: number = 0;

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  constructor(private http: HttpClient) { }

  obtenerCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.cursosUrl);
  } // http always returns an observable

  obtenerCursoPorId(id: number): Observable<Curso> {
    return this.http.get<Curso>(this.cursosUrl+'/buscar?id='+id);
  }

  crearCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.cursosUrl, curso);
  }

  actualizarCurso(curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(this.cursosUrl, curso);
  }

  eliminarCurso(id: number): Observable<Curso> {
    return this.http.delete<Curso>(this.cursosUrl+'?id='+id);
  }

  obtenerAlumnosPorCurso(id: number): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.cursosUrl+'/alumnos?id='+id);
  }

  inscribirAlumno(id: number, alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.cursosUrl + '/alumnos?id=' + id, alumno);
  }

}
