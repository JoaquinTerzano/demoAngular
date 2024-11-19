import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CursoService } from '../../service/curso.service';

@Component({
  selector: 'app-curso-crear',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './curso-crear.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CursoCrearComponent {

  cursoService = inject(CursoService);

  cursoForm = signal<FormGroup>(
    new FormGroup({
      tema: new FormControl(''),
      fechaInicio: new FormControl(''),
      fechaFin: new FormControl(''),
      docente: new FormControl(''),
      precio: new FormControl('')
    })
  );

  onSubmit(): void {
    let curso = this.cursoForm().value;
    this.cursoService
      .crearCurso(curso)
      .subscribe(response => console.log(response));
  }

}
