import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AlumnoService } from '../../service/alumno.service';

@Component({
  selector: 'app-alumno-crear',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './alumno-crear.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlumnoCrearComponent {

  alumnoService = inject(AlumnoService);

  alumnoForm = signal<FormGroup>(
    new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      fechaNacimiento: new FormControl('')
    })
  );

  onSubmit(): void {
    let alumno = this.alumnoForm().value;
    this.alumnoService
      .crearAlumno(alumno)
      .subscribe(response => console.log(response));
  }

}
