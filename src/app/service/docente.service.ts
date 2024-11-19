import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Docente } from '../models/docente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private docentesUrl = 'http://localhost:8080/docentes';

  public id: number = 0;

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  constructor(private http: HttpClient) { }

  obtenerDocentes(): Observable<Docente[]> {
    return this.http.get<Docente[]>(this.docentesUrl);
  } // http always returns an observable

  obtenerDocentePorId(id: number): Observable<Docente> {
    return this.http.get<Docente>(this.docentesUrl + '/buscar?id=' + id);
  }

  crearDocente(docente: Docente): Observable<Docente> {
    return this.http.post<Docente>(this.docentesUrl, docente);
  }

  actualizarDocente(docente: Docente): Observable<Docente> {
    return this.http.put<Docente>(this.docentesUrl, docente);
  }

  eliminarDocente(id: number): Observable<Docente> {
    return this.http.delete<Docente>(this.docentesUrl + '?id=' + id);
  }
}
