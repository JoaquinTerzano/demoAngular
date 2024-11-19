import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CursoService } from '../../service/curso.service';
import { Curso } from '../../models/curso';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-actualizar',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './curso-actualizar.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CursoActualizarComponent {

  cursoService = inject(CursoService);

  cursoForm = signal<FormGroup>(
    new FormGroup({
      id: new FormControl(''),
      tema: new FormControl(''),
      fechaInicio: new FormControl(''),
      fechaFin: new FormControl(''),
      docente: new FormControl(''),
      precio: new FormControl('')
    })
  );

  private route = inject(ActivatedRoute); // Inject ActivatedRoute directly

    id: number = 0;

    onSubmit(): void {
      let curso = this.cursoForm().value;
      this.route.queryParams.subscribe(params => {
        this.id = params['id'];
      });
      console.log(this.id);
      this.cursoService
        .actualizarCurso(new Curso(this.id, curso.tema, curso.fechaInicio, curso.fechaFin, curso.docente, curso.precio))
        .subscribe(response => console.log(response));
    }
}
