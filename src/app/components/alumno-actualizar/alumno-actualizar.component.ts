import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AlumnoService } from '../../service/alumno.service';
import { Alumno } from '../../models/alumno';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno-actualizar',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './alumno-actualizar.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlumnoActualizarComponent {

  alumnoService = inject(AlumnoService);

  alumnoForm = signal<FormGroup>(
    new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      fechaNacimiento: new FormControl('')
    })
  );

  private route = inject(ActivatedRoute); // Inject ActivatedRoute directly

    id: number = 0;

    onSubmit(): void {
      let alumno = this.alumnoForm().value;
      this.route.queryParams.subscribe(params => {
        this.id = params['id'];
      });
      console.log(this.id);
      this.alumnoService
        .actualizarAlumno(new Alumno(this.id, alumno.nombre, alumno.fechaNacimiento))
        .subscribe(response => console.log(response));
    }
}
