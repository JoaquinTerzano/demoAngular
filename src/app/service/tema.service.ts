import { Injectable, Input } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Tema } from '../models/tema';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  private temasUrl = 'http://localhost:8080/temas';

  public id: number = 0;

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  constructor(private http: HttpClient) { }

  obtenerTemas(): Observable<Tema[]> {
    return this.http.get<Tema[]>(this.temasUrl);
  } // http always returns an observable

  obtenerTemaPorId(id: number): Observable<Tema> {
    return this.http.get<Tema>(this.temasUrl+'/buscar?id='+id);
  }

  crearTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>(this.temasUrl, tema);
  }

  actualizarTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>(this.temasUrl, tema);
  }

  eliminarTema(id: number): Observable<Tema> {
    return this.http.delete<Tema>(this.temasUrl+'?id='+id);
  }

}
