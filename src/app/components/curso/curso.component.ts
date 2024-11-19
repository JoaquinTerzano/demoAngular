import { Component, inject, OnInit, signal } from '@angular/core';
import { Curso } from '../../models/curso';
import { CursoService } from '../../service/curso.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatLabel, MatFormField, MatInput, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent implements OnInit {
  
  cursoService = inject(CursoService);

  displayedColumns: string[] = ["id", "tema", "fechaInicio", "fechaFin", "docente", "precio", "Ver alumnos", "Editar", "Eliminar"];

  dataSource = new MatTableDataSource<Curso>();

  ngOnInit(): void {
    this.cursoService.obtenerCursos().subscribe(response => 
      this.dataSource = new MatTableDataSource(response));
    this.dataSource.filterPredicate = this.tableFilter();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarCurso(id: number): void {
    this.cursoService.eliminarCurso(id).subscribe(response => {
      console.log(response);
      this.dataSource = new MatTableDataSource(this.dataSource.data.filter(curso => curso.id !== id));
    });
  }

  tableFilter(): (data: Curso, filter: string) => boolean {
    let filterFunction = function (data: Curso, filter: string): boolean {
      return data.id.toString() === filter;
    }
    return filterFunction;
  }
  
}
