
export class Curso {
  id: number;
  tema: string;
  fechaInicio: string;
  fechaFin: string;
  docente: number;
  precio: number;

  constructor(id: number, tema: string, fechaInicio: string, fechaFin: string, docente: number, precio: number) {
    this.id = id;
    this.tema = tema;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.docente = docente;
    this.precio = precio;
  }
}
