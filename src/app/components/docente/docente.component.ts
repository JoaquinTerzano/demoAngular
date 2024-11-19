import { Component, inject, OnInit, signal } from '@angular/core';
import { Docente } from '../../models/docente';
import { DocenteService } from '../../service/docente.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-docente',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatLabel, MatFormField, MatInput, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './docente.component.html',
  styleUrl: './docente.component.css'
})
export class DocenteComponent {

  docenteService = inject(DocenteService);

  displayedColumns: string[] = ["id", "nombre", "legajo", "Editar", "Eliminar"];

  dataSource = new MatTableDataSource<Docente>();

  ngOnInit(): void {
    this.docenteService.obtenerDocentes().subscribe(response =>
      this.dataSource = new MatTableDataSource(response));
    this.dataSource.filterPredicate = this.tableFilter();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarDocente(id: number): void {
    this.docenteService.eliminarDocente(id).subscribe(response => {
      console.log(response);
      this.dataSource = new MatTableDataSource(this.dataSource.data.filter(docente => docente.id !== id));
    });
  }

  tableFilter(): (data: Docente, filter: string) => boolean {
    let filterFunction = function (data: Docente, filter: string): boolean {
      return data.legajo.toString() === filter;
    }
    return filterFunction;
  }

}
