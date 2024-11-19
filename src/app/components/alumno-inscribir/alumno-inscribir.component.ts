import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AlumnoService } from '../../service/alumno.service';
import { CursoService } from '../../service/curso.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno-inscribir',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './alumno-inscribir.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlumnoInscribirComponent {

  alumnoService = inject(AlumnoService);
  cursoService = inject(CursoService);

  cursoId: number = 0;

  private route = inject(ActivatedRoute); // Inject ActivatedRoute directly

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.cursoId = params['cursoId'];
    });
  }

  alumnoForm = signal<FormGroup>(
    new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      fechaNacimiento: new FormControl('')
    })
  );

  onSubmit(): void {
    let alumno = this.alumnoForm().value;
    this.cursoService
      .inscribirAlumno(this.cursoId, alumno.id)
      .subscribe(response => console.log(response));
  }

}
