import { Component, inject, OnInit, signal } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { AlumnoService } from '../../service/alumno.service';
import { CursoService } from '../../service/curso.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatLabel, MatFormField, MatInput, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './curso-alumno.component.html',
  styleUrl: './curso-alumno.component.css'
})
export class CursoAlumnoComponent implements OnInit {
  
  alumnoService = inject(AlumnoService);
  cursoService = inject(CursoService);

  cursoId: number = 0;

  displayedColumns: string[] = ["id", "nombre", "fechaNacimiento", "Dar de baja"];

  dataSource = new MatTableDataSource<Alumno>();

  private route = inject(ActivatedRoute); // Inject ActivatedRoute directly

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.cursoId = params['cursoId'];
    });
    this.cursoService
      .obtenerAlumnosPorCurso(this.cursoId)
      .subscribe(response => this.dataSource = new MatTableDataSource(response));
    this.dataSource.filterPredicate = this.tableFilter();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  darDeBajaAlumno(alumnoId: number): void {
    this.alumnoService
      .darDeBajaAlumno(alumnoId, this.cursoId)
      .subscribe(response => console.log(response));
  }

  tableFilter(): (data: Alumno, filter: string) => boolean {
    let filterFunction = function (data: Alumno, filter: string): boolean {
      return data.id.toString() === filter;
    }
    return filterFunction;
  }
  
}
