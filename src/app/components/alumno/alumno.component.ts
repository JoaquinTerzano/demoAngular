import { Component, inject, OnInit, signal } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { AlumnoService } from '../../service/alumno.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatLabel, MatFormField, MatInput, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent implements OnInit {
  
  alumnoService = inject(AlumnoService);

  displayedColumns: string[] = ["id", "nombre", "fechaNacimiento", "Inscribir", "Editar", "Eliminar"];

  dataSource = new MatTableDataSource<Alumno>();

  ngOnInit(): void {
    this.alumnoService.obtenerAlumnos().subscribe(response => 
      this.dataSource = new MatTableDataSource(response));
    this.dataSource.filterPredicate = this.tableFilter();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarAlumno(id: number): void {
    this.alumnoService.eliminarAlumno(id).subscribe(response => {
      console.log(response);
      this.dataSource = new MatTableDataSource(this.dataSource.data.filter(alumno => alumno.id !== id));
    });
  }

  tableFilter(): (data: Alumno, filter: string) => boolean {
    let filterFunction = function (data: Alumno, filter: string): boolean {
      return data.id.toString() === filter;
    }
    return filterFunction;
  }

}
