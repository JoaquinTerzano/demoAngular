
export class Alumno {
  id: number;
  nombre: string;
  fechaNacimiento: string;

  constructor(id: number, nombre: string, fechaNacimiento: string) {
    this.id = id;
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
  }
}
