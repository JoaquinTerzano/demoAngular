import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterLink],
  template: `
    <mat-toolbar color="primary">
      <a mat-button routerLink="">
        <mat-icon>home</mat-icon>
        <span>Home</span>
      </a>

      <a mat-button routerLink="/alumno">
        <span>Alumno</span>
      </a>

      <a mat-button routerLink="/docente">
        <span>Docente</span>
      </a>

      <a mat-button routerLink="/tema">
        <span>Tema</span>
      </a>

      <a mat-button routerLink="/curso">
        <span>Curso</span>
      </a>
    </mat-toolbar>

  `,
  styles: ``
})
export class ToolbarComponent {

}
