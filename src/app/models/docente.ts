export class Docente {
  id: number;
  legajo: number;
  nombre: string;

  constructor(id: number, legajo: number, nombre: string) {
    this.id = id;
    this.legajo = legajo;
    this.nombre = nombre;
  }
}
