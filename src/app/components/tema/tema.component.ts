import { Component, inject, OnInit, signal } from '@angular/core';
import { Tema } from '../../models/tema';
import { TemaService } from '../../service/tema.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tema',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatLabel, MatFormField, MatInput, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './tema.component.html',
  styleUrl: './tema.component.css'
})
export class TemaComponent implements OnInit {
  
  temaService = inject(TemaService);

  displayedColumns: string[] = ["id", "nombre", "descripcion", "Editar", "Eliminar"];

  dataSource = new MatTableDataSource<Tema>();

  ngOnInit(): void {
    this.temaService.obtenerTemas().subscribe(response => 
      this.dataSource = new MatTableDataSource(response));
    this.dataSource.filterPredicate = this.tableFilter();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarTema(id: number): void {
    this.temaService.eliminarTema(id).subscribe(response => {
      console.log(response);
      this.dataSource = new MatTableDataSource(this.dataSource.data.filter(tema => tema.id !== id));
    });
  }

  tableFilter(): (data: Tema, filter: string) => boolean {
    let filterFunction = function (data: Tema, filter: string): boolean {
      return data.nombre.toString() === filter;
    }
    return filterFunction;
  }
  
}
